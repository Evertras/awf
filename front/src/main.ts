import { loadAssets, textureGrass } from './assets';
import { loadWASM } from './wasmloader';

console.log('Hello Typescript World!');

const app = new PIXI.Application({
    autoResize: true,
});

document.body.appendChild(app.view);

app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';

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
    }
}

loadAssets(() => {
    const texGrass = textureGrass();
    app.stage.addChild(new PIXI.Sprite(texGrass));

    ready();
});

loadWASM((err) => {
    if (err) {
        return console.error(err);
    }

    ready();
});
