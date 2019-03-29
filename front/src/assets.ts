const pathTilemapTerrain = 'assets/terrain.json';
const pathTilemapUI = 'assets/ui.json';
const pathTilemapUnits = 'assets/units.json';

const pathTerrainGrass = 'grass1.png';
const pathTerrainObjectiveNeutral = 'objective-neutral.png';
const pathUISquareMove = 'square_move.png';

let texturesTerrain: PIXI.loaders.TextureDictionary | undefined;
let texturesUI: PIXI.loaders.TextureDictionary | undefined;
let sheetUnits: PIXI.Spritesheet | undefined;

export enum UnitType {
    SkeletonWarrior = 'skeleton_warrior',
}

export enum UnitAnimation {
    Idle = 'idle',
    Move = 'move',
}

export const tileSize = 64;

export function loadAssets(cb: CallableFunction) {
    PIXI.loader
        .add(pathTilemapTerrain)
        .add(pathTilemapUI)
        .add(pathTilemapUnits)
        .load(() => { // TODO: How does this handle errors?
            texturesTerrain = PIXI.loader.resources[pathTilemapTerrain].textures;
            texturesUI = PIXI.loader.resources[pathTilemapUI].textures;
            sheetUnits = PIXI.loader.resources[pathTilemapUnits].spritesheet;
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

export function animationUnit(unitType: UnitType, anim: UnitAnimation): PIXI.Texture[] {
    if (!sheetUnits) {
        throw new Error('texturesUnits not loaded');
    }

    return sheetUnits.animations[unitType + '-' + anim];
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
