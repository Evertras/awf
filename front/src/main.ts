import { loadAssets } from './assets';
import { Game } from './game';
import { awfdata } from './proto/messages';
import { wasmImpl } from './rpc/impl';
import { loadWASM } from './wasmloader';

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const app = new PIXI.Application({
    autoResize: true,
});

document.body.appendChild(app.view);

app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';

app.start();

function resize(): void {
    app.renderer.resize(window.innerWidth, window.innerHeight);
}

resize();

window.addEventListener('resize', resize);

let remaining = 2;

async function ready() {
    if (--remaining === 0) {
        console.log('Everything loaded');

        const wasmSvc = awfdata.WasmService.create(wasmImpl, false, false);
        await wasmSvc.initPrototype({});

        const state = await wasmSvc.getGameState(awfdata.GetGameStateRequest.create({}));
        const gameVisual = new Game(state.state!, wasmSvc);

        app.stage.addChild(gameVisual);
    }
}

loadAssets(() => {
    ready();
});

loadWASM(async (err) => {
    if (err) {
        return console.error(err);
    }

    ready();
});
