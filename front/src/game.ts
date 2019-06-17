import { tileSize } from './assets';
import { awfdata } from './proto/messages';
import { Map } from './visuals/map';
import { MovementOverlay } from './visuals/movementOverlay';
import { Unit } from './visuals/unit';

export class Game extends PIXI.Container {
    private map: Map;
    private moveOverlay: MovementOverlay;
    private units: Unit[] = [];
    private readonly awf: awfdata.WasmService;

    private mousePos: awfdata.IPoint = {};

    constructor(g: awfdata.IGame, awf: awfdata.WasmService) {
        super();

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

        this.on('mousemove', async (obj: PIXI.interaction.InteractionEvent) => {
            if (!obj.target || !obj.data) {
                return;
            }

            const rawPos = obj.data.getLocalPosition(this);

            const x = Math.floor(rawPos.x / tileSize + 0.5) + 1;
            const y = Math.floor(rawPos.y / tileSize + 0.5) + 1;

            if (this.mousePos.x !== x || this.mousePos.y !== y) {
                this.mousePos.x = x;
                this.mousePos.y = y;

                if (x < 1 || x > this.map.width || y < 1 || y > this.map.height) {
                    return;
                }

                this.moveOverlay.clear();

                try {
                    const req = { from: this.mousePos };
                    const possibleMoves = await this.awf.getPotentialMoves(req);

                    for (const possible of possibleMoves.moves) {
                        console.log(possible);
                        this.moveOverlay.enableSquare(possible.x!, possible.y!);
                    }
                } catch (e) {
                    console.error(e);
                    return;
                }
            }
        });
    }
}
