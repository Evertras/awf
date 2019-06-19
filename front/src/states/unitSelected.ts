import { tileSize } from '../assets';
import { awfdata } from '../proto/messages';
import { GameStateIdle } from './idle';
import { GameState, IGameState, IGameStateData } from './index';

export class GameStateUnitSelected implements IGameState {
    private readonly selectedUnitPos: awfdata.IPoint;

    constructor(selectedUnitPos: awfdata.IPoint) {
        this.selectedUnitPos = selectedUnitPos;
    }

    public state() {
        return GameState.UnitSelected;
    }

    public async mouseMovedTo(): Promise<IGameState | null> {
        return null;
    }

    public async clicked(data: IGameStateData, pos: awfdata.IPoint): Promise<IGameState | null> {
        if (!pos.x || !pos.y || !data.visuals.map.data.tiles) {
            return null;
        }

        try {
            const unitPos = this.selectedUnitPos!;
            const mapIndex = (unitPos.y! - 1) * data.visuals.map.width + (unitPos.x! - 1);
            const movingUnit = data.visuals.map.data.tiles[mapIndex].unit;

            if (!movingUnit) {
                throw new Error('No unit found here');
            }

            console.log('Moving', movingUnit);

            await data.awfService.move({
                cmd: {
                    source: this.selectedUnitPos,
                    destination: pos,
                },
            });

            const visualUnit = data.visuals.units[movingUnit.id!];

            visualUnit.x = (pos.x - 1) * tileSize;
            visualUnit.y = (pos.y - 1) * tileSize;

            const response = await data.awfService.getGameState({});
            if (!response.state || !response.state.map || !response.state.map.tiles) {
                throw new Error('Did not find game state or game state was malformed');
            }

            data.visuals.map.data = response.state.map;

            // TODO: Make this cleaner, don't like how this is magical right now
            data.visuals.movementOverlay.clear();

            return new GameStateIdle();
        } catch (e) {
            console.error(e);
        }

        return null;
    }
}
