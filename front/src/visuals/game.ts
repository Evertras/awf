import { Map } from './map';
import { MovementOverlay } from './movementOverlay';
import { Unit } from './unit';

export interface IGameVisuals {
    movementOverlay: MovementOverlay;
    map: Map;
    units: { [id: number]: Unit };
}
