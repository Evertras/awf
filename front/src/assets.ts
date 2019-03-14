const pathTilemapTerrain = 'assets/terrain.json';
const pathTilemapUI = 'assets/ui.json';
const pathTerrainGrass = 'grass1.png';
const pathTerrainObjectiveNeutral = 'objective-neutral.png';
const pathUISquareMove = 'square_move.png';

let texturesTerrain: PIXI.loaders.TextureDictionary | undefined;
let texturesUI: PIXI.loaders.TextureDictionary | undefined;

export const tileSize = 64;
export const tileCenterOffset = tileSize / 2;

export function loadAssets(cb: CallableFunction) {
    PIXI.loader
        .add(pathTilemapTerrain)
        .add(pathTilemapUI)
        .load(() => { // TODO: How does this handle errors?
            texturesTerrain = PIXI.loader.resources[pathTilemapTerrain].textures;
            texturesUI = PIXI.loader.resources[pathTilemapUI].textures;
            cb();
        });
}

function getTexTerrain(name: string): PIXI.Texture {
    if (!texturesTerrain) {
        throw new Error('texturesTerrain not loaded');
    }

    return texturesTerrain[name];
}

function getTexUI(name: string): PIXI.Texture {
    if (!texturesUI) {
        throw new Error('texturesUI not loaded');
    }

    return texturesUI[name];
}

export function textureTerrainGrass(): PIXI.Texture {
    return getTexTerrain(pathTerrainGrass);
}

export function textureTerrainObjectiveNeutral(): PIXI.Texture {
    return getTexTerrain(pathTerrainObjectiveNeutral);
}

export function textureSquareMove(): PIXI.Texture {
    return getTexUI(pathUISquareMove);
}
