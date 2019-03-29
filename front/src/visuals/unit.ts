import { animationUnit, UnitAnimation, UnitType } from '../assets';
import { awfdata } from '../proto/messages';

export class Unit extends PIXI.Container {
    public unit: awfdata.IUnit;
    private sprite: PIXI.extras.AnimatedSprite;

    constructor(unit: awfdata.IUnit) {
        super();

        this.unit = unit;
        this.sprite = new PIXI.extras.AnimatedSprite(animationUnit(UnitType.SkeletonWarrior, UnitAnimation.Idle), true);

        this.sprite.anchor.set(0.5, 0.6);
        this.sprite.scale.x = this.sprite.scale.y = 2.5;
        this.sprite.animationSpeed = 0.2;
        this.sprite.play();

        if (unit.owner && unit.owner % 2 === 1) {
            this.sprite.scale.x = -this.sprite.scale.x;
        }

        this.addChild(this.sprite);
    }
}
