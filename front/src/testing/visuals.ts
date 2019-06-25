import sinon from 'sinon';
import { IGameVisuals } from '../visuals/game';
import { IVisualMap } from '../visuals/map';
import { IVisualMovementOverlay } from '../visuals/movementOverlay';
import { IVisualUnit } from '../visuals/unit';

export class FakeGameVisuals implements IGameVisuals {
    public readonly movementOverlay: IVisualMovementOverlay;
    public readonly map: IVisualMap;
    public readonly units: { [id: number]: IVisualUnit };

    constructor() {
        this.movementOverlay = {
            clear: sinon.stub(),
            enableSquare: sinon.stub(),
        };

        const width = 10;
        const height = 8;

        this.map = {
            width: width,
            height: height,
            data: {
                tiles: [],
            },
        };

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                this.map.data.tiles!.push({
                    terrainId: 1,
                    unit: null,
                });
            }
        }

        this.units = {};
    }
}
