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

        this.map = {
            width: 10,
            height: 10,
            data: {
            },
        };

        this.units = {};
    }
}
