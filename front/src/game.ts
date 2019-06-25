import { tileSize } from './assets';
import { awfdata } from './proto/messages';
import { GameStateMachine, IGameStateData } from './states';
import { IGameVisuals } from './visuals/game';
import { VisualMap } from './visuals/map';
import { VisualMovementOverlay } from './visuals/movementOverlay';
import { VisualUnit } from './visuals/unit';

export class Game extends PIXI.Container {
    private readonly visuals: IGameVisuals;
    private readonly awf: awfdata.WasmService;

    private mousePos: awfdata.IPoint = { x: 1, y: 1 };

    private readonly state: GameStateMachine = new GameStateMachine();

    constructor(g: awfdata.IGame, awf: awfdata.WasmService) {
        super();

        // this.gameData = g;

        this.awf = awf;

        if (!g.map || !g.map.width || !g.map.height || !g.map.tiles) {
            throw new Error('Game map not defined');
        }

        this.visuals = {
            movementOverlay: new VisualMovementOverlay(g.map.width, g.map.height),
            map: new VisualMap(g.map),
            units: {},
        } as IGameVisuals;

        this.addChild(this.visuals.map.layer);
        this.addChild(this.visuals.movementOverlay);

        for (let x = 0; x < g.map.width; ++x) {
            for (let y = 0; y < g.map.height; ++y) {
                const tile = g.map.tiles[y * g.map.width + x];

                if (tile.unit) {
                    const u = new VisualUnit(tile.unit);

                    this.visuals.units[u.unit.id!] = u;

                    u.x = tileSize * x;
                    u.y = tileSize * y;

                    this.addChild(u);
                }
            }
        }

        this.x = 100;
        this.y = 100;
        this.hitArea = new PIXI.Rectangle(0, 0, this.visuals.map.width * tileSize, this.visuals.map.height * tileSize);
        this.interactive = true;

        this.on('click', async (obj: PIXI.interaction.InteractionEvent) => {
            if (!obj.target || !obj.data) {
                return;
            }

            this.updateMousePos(obj);

            await this.state.clicked(this.getStateData(), this.mousePos);
        });

        this.on('mousemove', async (obj: PIXI.interaction.InteractionEvent) => {
            if (!obj.target || !obj.data) {
                return;
            }

            if (this.updateMousePos(obj)) {
                await this.state.mouseMovedTo(this.getStateData(), this.mousePos);
            }
        });
    }

    private getStateData(): IGameStateData {
        return {
            visuals: this.visuals,
            awfService: this.awf,
        } as IGameStateData;
    }

    private updateMousePos(obj: PIXI.interaction.InteractionEvent): boolean {
        const rawPos = obj.data.getLocalPosition(this);

        const x = Math.floor(rawPos.x / tileSize + 0.5) + 1;
        const y = Math.floor(rawPos.y / tileSize + 0.5) + 1;

        if (x < 1 || x > this.visuals.map.width || y < 1 || y > this.visuals.map.height) {
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
