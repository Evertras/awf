import { tileSize } from './assets';
import { MapLocation } from './mapLocation';
import { awfdata } from './proto/messages';
import { GameMap } from './visuals/map';
import { MovementOverlay } from './visuals/movementOverlay';

export class Game extends PIXI.Container {
    private map: GameMap;
    private moveOverlay: MovementOverlay;

    private mousePos: MapLocation = new MapLocation();

    constructor(g: awfdata.Game) {
        super();

        if (!g.map) {
            throw new Error('Game map not defined');
        }

        this.map = new GameMap(g.map);

        if (!this.map.width || !this.map.height) {
            throw new Error('Game map is missing dimensions');
        }

        this.moveOverlay = new MovementOverlay(this.map.width, this.map.height);

        this.addChild(this.map);
        this.addChild(this.moveOverlay);

        this.x = 100;
        this.y = 100;
        this.hitArea = new PIXI.Rectangle(0, 0, this.map.width * tileSize, this.map.height * tileSize);
        this.interactive = true;

        this.on('mousemove', (obj: PIXI.interaction.InteractionEvent) => {
            if (!obj.target || !obj.data) {
                return;
            }

            const rawPos = obj.data.getLocalPosition(this);

            const x = Math.floor(rawPos.x / tileSize);
            const y = Math.floor(rawPos.y / tileSize);

            if (this.mousePos.x !== x || this.mousePos.y !== y) {
                this.mousePos.x = x;
                this.mousePos.y = y;

                if (x >= 0 && x < this.map.width && y >= 0 && y < this.map.height) {
                    this.moveOverlay.clear();
                    this.moveOverlay.enableSquare(x, y);
                }
            }
        });
    }
}
