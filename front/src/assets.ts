const pathTilemapTerrain = 'assets/terrain.json';
const pathTerrainGrass = 'grass1.png';

let texturesTerrain: PIXI.loaders.TextureDictionary | undefined;

export function loadAssets(cb: CallableFunction) {
    PIXI.loader
        .add(pathTilemapTerrain)
        .load(() => {
            texturesTerrain = PIXI.loader.resources[pathTilemapTerrain].textures;
            cb();
        });
}

export function textureGrass(): PIXI.Texture {
    if (!texturesTerrain) {
        throw new Error('texturesTerrain not loaded');
    }

    return texturesTerrain[pathTerrainGrass];
}
