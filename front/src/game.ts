import { tileSize } from './assets';
import { awfdata } from './proto/messages';
import { Map } from './visuals/map';
import { MovementOverlay } from './visuals/movementOverlay';
import { Unit } from './visuals/unit';
import { TypeState } from 'typestate';

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
    private units: Unit[] = [];
    private selectedUnitPos: awfdata.IPoint | null = null;
    private readonly awf: awfdata.WasmService;

    private mousePos: awfdata.IPoint = {};
    private readonly state: TypeState.FiniteStateMachine<GameState>;

    constructor(g: awfdata.IGame, awf: awfdata.WasmService) {
        super();

        this.state = new TypeState.FiniteStateMachine<GameState>(GameState.Idle);

        this.state.on(GameState.Idle, () => {
            this.selectedUnitPos = null;
        });

        this.state.onEnter(GameState.UnitSelected, (): boolean => {
            return true;
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

                    this.units.push(u);

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

            const rawPos = obj.data.getLocalPosition(this);

            this.updateMousePos(rawPos);

            if (!this.mousePos.x || !this.mousePos.y || !this.map.data.tiles) {
                return;
            }

            const tile = this.map.data.tiles[(this.mousePos.y-1) * this.map.width + (this.mousePos.x - 1)];

            switch (this.state.currentState) {
                case GameState.Idle:
                    if (!tile.unit) {
                        return;
                    }

                    this.selectedUnitPos = this.mousePos;
                    this.state.go(GameState.UnitSelected);
                    console.log(this.state.currentState);
                    break;

                case GameState.UnitSelected:
                    console.log('Want to move to', this.mousePos);
                    break;
            }
        });

        this.on('mousemove', async (obj: PIXI.interaction.InteractionEvent) => {
            if (!obj.target || !obj.data) {
                return;
            }

            const rawPos = obj.data.getLocalPosition(this);

            if (this.updateMousePos(rawPos)) {
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

    private updateMousePos(point: PIXI.Point): boolean {
        const x = Math.floor(point.x / tileSize + 0.5) + 1;
        const y = Math.floor(point.y / tileSize + 0.5) + 1;

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
