declare interface point {
    x: number;
    y: number;
}

declare namespace gowasm {
    const ready: boolean;
    const sayHello: () => void;
    const initPrototype: (cb: (err?: string) => void) => void;
    const getPotentialMoves: (x: number, y: number, cb: (err: string | undefined, moves: point[]) => void) => void;
    const getPotentialMovesBenchmark: (x: number, y: number, cb: (err: string | undefined) => void) => void;
}
