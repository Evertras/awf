import { MovementOverlay } from './movementOverlay';
import { Map } from './map';
import { Unit } from './unit';

export interface IGameVisuals {
    movementOverlay: MovementOverlay;
    map: Map;
    units: { [id: number]: Unit };
}
