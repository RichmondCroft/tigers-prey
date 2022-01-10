import {
	Application,
	Container, 
	Sprite, 
	Ticker
} from "pixi.js";


const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});


export class Scene extends Container {
	private readonly screenWidth: number;
	private readonly screenHeight: number;

	private clampy: Sprite;
	private clampyVelocity: number = 5;
	constructor(screenWidth: number, screenHeight: number) {
		super();

		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;

		this.clampy = Sprite.from("clampy.png");

		this.clampy.anchor.set(0.5);
		this.clampy.x = 0; // we start it at 0
		this.clampy.y = this.screenHeight / 2;
		this.addChild(this.clampy);

		// See the `, this` thingy there? That is another way of binding the context!
		Ticker.shared.add(this.update, this);

		// If you want, you can do it the bind way
		// Ticker.shared.add(this.update.bind(this)); 
	}

	private update(deltaTime: number): void {
		this.clampy.x = this.clampy.x + this.clampyVelocity * deltaTime;

		if (this.clampy.x > this.screenWidth) {
			// Woah there clampy, come back inside the screen!
			this.clampy.x = 0;
		}
	}
}
const scene = new Scene(500, 500);
app.stage.addChild(scene);
