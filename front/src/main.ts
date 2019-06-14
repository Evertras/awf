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
    // Resize the renderer
    app.renderer.resize(window.innerWidth, window.innerHeight);
}

resize();

// Listen for window resize events
window.addEventListener('resize', resize);

let remaining = 2;

let wasmSvc: awfdata.WasmService;

async function ready() {
    if (--remaining === 0) {
        console.log('Everything loaded');

        const state = await wasmSvc.getGameState(awfdata.GetGameStateRequest.create({}));
        const gameVisual = new Game(state.state!);

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

    wasmSvc = awfdata.WasmService.create(wasmImpl, false, false);
    console.log('Sending RPC call to echo with text: Testing echo');
    const res = await wasmSvc.echo({ text: 'Testing echo' });
    console.log('RPC response:', res.text);

    await wasmSvc.initPrototype({});

    try {
        const moves = await wasmSvc.getPotentialMoves({ from: {x: 4, y: 0 } });

        console.log(moves.moves);
    } catch (err) {
        console.error(err);
    }

    ready();
});
