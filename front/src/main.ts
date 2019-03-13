import { awfdata } from '../../messages/tsmessage/messages';
import { loadAssets, textureTerrainGrass, textureTerrainObjectiveNeutral, tileSize } from './assets';
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
                const map = state.map;

                // This is a little ridiculous, but protobuf makes it necessary...
                if (map && map.width && map.height && map.tiles && map.terrain) {
                    for (let x = 0; x < map.width; x++) {
                        for (let y = 0; y < map.height; y++) {
                            let tex: PIXI.Texture;

                            switch (map.tiles[y * map.width + x].terrainId) {
                                case 2:
                                    tex = textureTerrainObjectiveNeutral();
                                    break;

                                default:
                                tex = textureTerrainGrass();
                            }

                            const tile = new PIXI.Sprite(tex);

                            tile.x = tileSize * x;
                            tile.y = tileSize * y;

                            app.stage.addChild(tile);
                        }
                    }
                }
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
