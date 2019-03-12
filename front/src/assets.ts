const pathTilemapTerrain = 'assets/terrain.json';
const pathTerrainGrass = 'grass1.png';
const pathTerrainObjectiveNeutral = 'objective-neutral.png';

let texturesTerrain: PIXI.loaders.TextureDictionary | undefined;

export const tileSize = 64;

export function loadAssets(cb: CallableFunction) {
    PIXI.loader
        .add(pathTilemapTerrain)
        .load(() => {
            texturesTerrain = PIXI.loader.resources[pathTilemapTerrain].textures;
            cb();
        });
}

function getTex(name: string) {
    if (!texturesTerrain) {
        throw new Error('texturesTerrain not loaded');
    }

    return texturesTerrain[name];
}

export function textureGrass(): PIXI.Texture {
    return getTex(pathTerrainGrass);
}

export function textureObjectiveNeutral(): PIXI.Texture {
    return getTex(pathTerrainObjectiveNeutral);
}
