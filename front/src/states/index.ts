import { awfdata } from '../proto/messages';
import { IGameVisuals } from '../visuals/game';
import { GameStateIdle } from './idle';

export enum GameState {
    None,
    Idle,
    UnitSelected,
    UnitMoving,
}

export interface IGameStateData {
    awfService: awfdata.WasmService;
    visuals: IGameVisuals;
}

export interface IGameState {
    // Called by GameStateMachine after it discovers it's been given a new state
    init(data: IGameStateData): Promise<void>;

    mouseMovedTo(data: IGameStateData, pos: awfdata.IPoint): Promise<IGameState | null>;
    clicked(data: IGameStateData, pos: awfdata.IPoint): Promise<IGameState | null>;

    state(): GameState;
}

export class GameStateMachine {
    private state: IGameState = new GameStateIdle();

    private changeState(state: IGameState | null, data: IGameStateData) {
        if (!state) {
            return;
        }

        this.state = state;
        this.state.init(data);
    }

    public async mouseMovedTo(data: IGameStateData, pos: awfdata.IPoint): Promise<void> {
        this.changeState(await this.state.mouseMovedTo(data, pos), data);
    }

    public async clicked(data: IGameStateData, pos: awfdata.IPoint): Promise<void> {
        this.changeState(await this.state.clicked(data, pos), data);
    }
}
