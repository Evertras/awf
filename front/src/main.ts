import { loadAssets } from './assets';
import { Game } from './game';
import { awfdata } from './proto/messages';
import { loadWASM } from './wasmloader';

console.log('Hello Typescript World!');

const app = new PIXI.Application({
    autoResize: true,
});

document.body.appendChild(app.view);

app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';

app.start();

function resize(): void {
    // Resize the renderer
    app.renderer.resize(window.innerWidth, window.innerHeight);
}

resize();

// Listen for window resize events
window.addEventListener('resize', resize);

let remaining = 2;

function ready() {
    if (--remaining === 0) {
        console.log('Everything loaded');

        gowasm.sayHello();

        gowasm.initPrototype((err?: string) => {
            if (err) {
                return console.error(err);
            }

            console.log('Successfully loaded a prototype game');

            const cb = (errState: string | undefined, raw: Uint8Array) => {
                if (errState) {
                    return console.error(errState);
                }

                const state = awfdata.Game.decode(raw);

                const gameVisual = new Game(state);

                app.stage.addChild(gameVisual);
           };

            gowasm.getGameState(cb);
        });
    }
}

loadAssets(() => {
    ready();
});

loadWASM((err) => {
    if (err) {
        return console.error(err);
    }

    ready();
});
