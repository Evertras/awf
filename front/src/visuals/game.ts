import { awfdata } from '../../../messages/tsmessage/messages';
import { GameMap } from './map';
import { MovementOverlay } from './movementOverlay';

export class Game extends PIXI.Sprite {
    private map: GameMap;
    private moveOverlay: MovementOverlay;

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

        this.moveOverlay.enableSquare(3, 3);

        this.x = 100;
        this.y = 100;
    }
}
