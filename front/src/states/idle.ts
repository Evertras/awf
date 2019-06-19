import { GameState, IGameState, IGameStateData } from './index';
import { awfdata } from '../proto/messages';
import { GameStateUnitSelected } from './unitSelected';

export class GameStateIdle implements IGameState {
    public state() {
        return GameState.Idle;
    }

    public async mouseMovedTo(data: IGameStateData, pos: awfdata.IPoint): Promise<IGameState | null> {
        data.visuals.movementOverlay.clear();

        try {
            const req = { from: pos };
            const possibleMoves = await data.awfService.getPotentialMoves(req);

            for (const possible of possibleMoves.moves) {
                data.visuals.movementOverlay.enableSquare(possible.x!, possible.y!);
            }
        } catch (e) {
            // TODO: Validate up front better and treat this as a legit error?
        }

        return null;
    }

    public async clicked(data: IGameStateData, pos: awfdata.IPoint): Promise<IGameState | null> {
        if (!pos.x || !pos.y || !data.visuals.map.data.tiles) {
            return null;
        }

        const tile = data.visuals.map.data.tiles[(pos.y! - 1) * data.visuals.map.width + (pos.x! - 1)];

        if (!tile.unit) {
            return null;
        }

        try {
            // This will fail if we can't move, which makes for a convenient check
            await data.awfService.getPotentialMoves({ from: pos });

            const selectedUnitPos: awfdata.IPoint = {
                x: pos.x,
                y: pos.y,
            };

            return new GameStateUnitSelected(selectedUnitPos);
        } catch(e) {}

        return null;
    }
}

