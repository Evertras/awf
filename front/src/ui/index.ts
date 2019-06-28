import { UIButton } from './button';

export class UI extends PIXI.Container {
    private readonly nextTurnButton: UIButton;

    constructor() {
        super();

        // This is all temporary but a good spot to start
        this.nextTurnButton = new UIButton('Next Turn', () => {
            console.log('NEXT!');
        });

        this.addChild(this.nextTurnButton);
    }
}
