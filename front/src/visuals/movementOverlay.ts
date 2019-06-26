import { textureSquareMove, tileSize } from '../assets';

export interface IVisualMovementOverlay {
    layer: PIXI.Container;
    clear(): void;
    enableSquare(x: number, y: number): void;
}

export class VisualMovementOverlay implements IVisualMovementOverlay {

    public readonly layer: PIXI.Container = new PIXI.Container();
    private overlays: Array<PIXI.Sprite | null>;
    private mapWidth: number;
    private mapHeight: number;

    constructor(width: number, height: number) {
        this.mapWidth = width;
        this.mapHeight = height;

        this.overlays = new Array(this.mapWidth * this.mapHeight);
    }

    public clear() {
        this.layer.removeChildren();

        for (let i = 0; i < this.overlays.length; ++i) {
            const s = this.overlays[i];

            if (s) {
                this.overlays[i] = null;
            }
        }
    }

    public enableSquare(x: number, y: number) {
        const i = this.index(x, y);
        const existing = this.overlays[i];

        if (existing) {
            existing.texture = textureSquareMove();
        } else {
            const s = new PIXI.Sprite(textureSquareMove());

            s.x = (x - 1) * tileSize;
            s.y = (y - 1) * tileSize;
            s.anchor.x = 0.5;
            s.anchor.y = 0.5;

            this.layer.addChild(s);

            this.overlays[i] = s;
        }
    }

    private index(x: number, y: number): number {
        return (y - 1) * this.mapWidth + (x - 1);
    }
}
