import { textureUIButton } from '../assets';

export class UIButton extends PIXI.Container {
    constructor(label: string, action: () => void) {
        super();

        // Ugly but simple for prototype
        const text = new PIXI.Text(label,
            {
                fontFamily: 'Arial',
                fontSize: 18,
                fill: 0xffffff,
                align: 'center',
            });

        // Janky formatting for now, fix later
        text.y = 10;
        text.x = 10;

        const bg = new PIXI.Sprite(textureUIButton());

        this.addChild(bg);
        this.addChild(text);

        this.interactive = true;

        this.on('click', action);
    }
}
