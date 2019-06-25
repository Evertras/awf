import { IVisualMap } from './map';
import { IVisualMovementOverlay } from './movementOverlay';
import { IVisualUnit } from './unit';

export interface IGameVisuals {
    movementOverlay: IVisualMovementOverlay;
    map: IVisualMap;
    units: { [id: number]: IVisualUnit };
}
