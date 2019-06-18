import { TypeState } from 'typestate';
import { tileSize } from './assets';
import { awfdata } from './proto/messages';
import { Map } from './visuals/map';
import { MovementOverlay } from './visuals/movementOverlay';
import { Unit } from './visuals/unit';

// TODO: Move this when structure is solidified
enum GameState {
    None,
    Idle,
    UnitSelected,
    UnitMoving,
}

export class Game extends PIXI.Container {
    private map: Map;
    private moveOverlay: MovementOverlay;
    private units: { [id: number]: Unit } = {};
    private selectedUnitPos: awfdata.IPoint | null = null;
    private readonly awf: awfdata.WasmService;

    private mousePos: awfdata.IPoint = { x: 1, y: 1 };
    private readonly state: TypeState.FiniteStateMachine<GameState>;

    constructor(g: awfdata.IGame, awf: awfdata.WasmService) {
        super();

        this.state = new TypeState.FiniteStateMachine<GameState>(GameState.Idle);

        this.state.on(GameState.Idle, () => {
            this.selectedUnitPos = null;
            this.moveOverlay.clear();
        });

        this.state.onEnter(GameState.UnitSelected, (): boolean => {
            return this.selectedUnitPos !== null;
        });

        // Player selects a unit
        this.state.from(GameState.Idle).to(GameState.UnitSelected);

        // Player cancels their selection
        this.state.from(GameState.UnitSelected).to(GameState.Idle);

        // Player commands unit to move
        this.state.from(GameState.UnitSelected).to(GameState.UnitMoving);

        // Unit finishes moving and player can select another unit
        this.state.from(GameState.UnitMoving).to(GameState.Idle);

        this.awf = awf;

        if (!g.map || !g.map.width || !g.map.height || !g.map.tiles) {
            throw new Error('Game map not defined');
        }

        this.map = new Map(g.map);

        this.addChild(this.map.layer);

        for (let x = 0; x < g.map.width; ++x) {
            for (let y = 0; y < g.map.height; ++y) {
                const tile = g.map.tiles[y * g.map.width + x];

                if (tile.unit) {
                    const u = new Unit(tile.unit);

                    this.units[u.unit.id!] = u;

                    u.x = tileSize * x;
                    u.y = tileSize * y;

                    this.addChild(u);
                }
            }
        }

        this.moveOverlay = new MovementOverlay(this.map.width, this.map.height);

        this.addChild(this.moveOverlay);

        this.x = 100;
        this.y = 100;
        this.hitArea = new PIXI.Rectangle(0, 0, this.map.width * tileSize, this.map.height * tileSize);
        this.interactive = true;

        this.on('click', async (obj: PIXI.interaction.InteractionEvent) => {
            if (!obj.target || !obj.data) {
                return;
            }

            this.updateMousePos(obj);

            if (!this.mousePos.x || !this.mousePos.y || !this.map.data.tiles) {
                return;
            }

            const tile = this.map.data.tiles[(this.mousePos.y - 1) * this.map.width + (this.mousePos.x - 1)];

            switch (this.state.currentState) {
                case GameState.Idle:
                    if (!tile.unit) {
                        return;
                    }

                    try {
                        // This will fail if we can't move, which makes for a convenient check
                        await this.awf.getPotentialMoves({ from: this.mousePos });

                        this.selectedUnitPos = {
                            x: this.mousePos.x,
                            y: this.mousePos.y,
                        };

                        this.state.go(GameState.UnitSelected);
                    } catch(e) {}
                    break;

                case GameState.UnitSelected:
                    try {

                        const unitPos = this.selectedUnitPos!;
                        const mapIndex = (unitPos.y! - 1) * this.map.width + (unitPos.x! - 1);
                        const movingUnit = this.map.data.tiles[mapIndex].unit;

                        if (!movingUnit) {
                            throw new Error('No unit found here');
                        }

                        console.log('Moving', movingUnit);

                        await this.awf.move({
                            cmd: {
                                source: this.selectedUnitPos,
                                destination: this.mousePos,
                            },
                        });

                        const visualUnit = this.units[movingUnit.id!];

                        visualUnit.x = (this.mousePos.x! - 1) * tileSize;
                        visualUnit.y = (this.mousePos.y! - 1) * tileSize;

                        const response = await this.awf.getGameState({});
                        if (!response.state || !response.state.map || !response.state.map.tiles) {
                            throw new Error('Did not find game state or game state was malformed');
                        }

                        this.map.data = response.state.map;

                        this.state.go(GameState.Idle);
                    } catch (e) {
                        console.error(e);
                    }
                    break;
            }
        });

        this.on('mousemove', async (obj: PIXI.interaction.InteractionEvent) => {
            if (!obj.target || !obj.data) {
                return;
            }

            if (this.updateMousePos(obj)) {
                if (this.state.is(GameState.Idle)) {
                    this.moveOverlay.clear();

                    try {
                        const req = { from: this.mousePos };
                        const possibleMoves = await this.awf.getPotentialMoves(req);

                        for (const possible of possibleMoves.moves) {
                            this.moveOverlay.enableSquare(possible.x!, possible.y!);
                        }
                    } catch (e) {
                        // TODO: Validate up front better and treat this as a legit error?
                    }
                }
            }
        });
    }

    private updateMousePos(obj: PIXI.interaction.InteractionEvent): boolean {
        const rawPos = obj.data.getLocalPosition(this);

        const x = Math.floor(rawPos.x / tileSize + 0.5) + 1;
        const y = Math.floor(rawPos.y / tileSize + 0.5) + 1;

        if (x < 1 || x > this.map.width || y < 1 || y > this.map.height) {
            return false;
        }

        if (this.mousePos.x === x && this.mousePos.y === y) {
            return false;
        }

        this.mousePos.x = x;
        this.mousePos.y = y;

        return true;
    }
}
