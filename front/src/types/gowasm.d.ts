declare namespace gowasm {
    const ready: boolean;
    const sayHello: () => void;
    const initPrototype: (cb: (err?: string) => void) => void;
}