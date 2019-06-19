import { awfdata } from "../proto/messages";
import { IGameVisuals } from "../visuals/game";
import { GameStateIdle } from "./idle";

export enum GameState {
    None,
    Idle,
    UnitSelected,
    UnitMoving,
}

export interface IGameStateData {
    awfService: awfdata.WasmService;
    visuals: IGameVisuals;

    // Should figure out something better for this...
    selectedUnitPos: awfdata.IPoint | undefined;
}

export interface IGameState {
    mouseMovedTo(data: IGameStateData, pos: awfdata.IPoint): Promise<IGameState | null>;
    clicked(data: IGameStateData, pos: awfdata.IPoint): Promise<IGameState | null>;

    state(): GameState;
}

export class GameStateMachine {
    private state: IGameState = new GameStateIdle();

    constructor() {
    }

    public async mouseMovedTo(data: IGameStateData, pos: awfdata.IPoint): Promise<void> {
        const newState = await this.state.mouseMovedTo(data, pos);

        if (newState) {
            this.state = newState;
        }
    }

    public async clicked(data: IGameStateData, pos: awfdata.IPoint): Promise<void> {
        const newState = await this.state.clicked(data, pos);

        if (newState) {
            this.state = newState;
        }
    }
}

