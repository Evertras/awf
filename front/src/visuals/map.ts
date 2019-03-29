import { textureTerrainGrass, textureTerrainObjectiveNeutral, tileSize } from '../assets';
import { awfdata } from '../proto/messages';

export class GameMap extends PIXI.Container {
    constructor(map: awfdata.IMap) {
        super();

        // Thanks protobuf...
        if (!map || !map.width || !map.height || !map.tiles || !map.terrain) {
            throw new Error('Map is not fully defined');
        }

        for (let x = 0; x < map.width; ++x) {
            for (let y = 0; y < map.height; ++y) {
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

                tile.anchor.set(0.5, 0.5);

                this.addChild(tile);
            }
        }
    }
}
