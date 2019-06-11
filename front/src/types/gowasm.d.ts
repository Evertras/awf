declare interface point {
    x: number;
    y: number;
}

declare namespace gowasm {
    const ready: boolean;
    const initPrototype: (cb: (err?: string) => void) => void;
    const getPotentialMoves: (cb: (err: string | undefined, moves: point[]) => void, x: number, y: number) => void;
    const getGameState: (cb: (err: string | undefined, state: Uint8Array) => void) => void;
}
