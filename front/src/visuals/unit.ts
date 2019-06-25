import { animationUnit, UnitAnimation, UnitType } from '../assets';
import { awfdata } from '../proto/messages';

export interface IVisualUnit {
    data: awfdata.IUnit;

    x: number;
    y: number;
}

export class VisualUnit extends PIXI.Container implements IVisualUnit {
    public data: awfdata.IUnit;
    private sprite: PIXI.extras.AnimatedSprite;

    constructor(data: awfdata.IUnit) {
        super();

        this.data = data;
        this.sprite = new PIXI.extras.AnimatedSprite(animationUnit(UnitType.SkeletonWarrior, UnitAnimation.Idle), true);

        this.sprite.anchor.set(0.5, 0.6);
        this.sprite.scale.x = this.sprite.scale.y = 2.5;
        this.sprite.animationSpeed = 0.2;
        this.sprite.play();

        if (data.owner && data.owner % 2 === 1) {
            this.sprite.scale.x = -this.sprite.scale.x;
        }

        this.addChild(this.sprite);
    }
}
