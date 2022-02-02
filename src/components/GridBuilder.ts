import { Container, Graphics } from "pixi.js";
import { getTriangleGameGrid } from "../utils";
import { GameGridPoint } from "../utils/GameGrid";

// const TRIANGLE_Grid = {
// 	points: [],
// 	edges: []
// }

class GridBuilder extends Container {
	private grid = getTriangleGameGrid();

	constructor() {
		super()
		this.plotPoints()
	}

	plotPoints() {
		this.grid.points.map(this.plotGridPoint.bind(this))
	}

	plotGridPoint(gridPoint: GameGridPoint) {
		let circleGraphics = new Graphics()
		circleGraphics.beginFill(0xFFFFFF);
		circleGraphics.drawCircle(gridPoint.x, gridPoint.y, 10);
		circleGraphics.endFill();
		this.addChild(circleGraphics);
	}

	static generate() {
		let rectangleGraphics = new Graphics()
		rectangleGraphics.beginFill(0xFF00FF);
		// let polygon = new Polygon(500,0 , 0,300, 300,300, 70,200);
		// rectangleGraphics.drawPolygon(polygon);
		rectangleGraphics.drawCircle(0,0,50)
		// rectangleGraphics.drawRect(0,0,500, 500)
		rectangleGraphics.endFill();

		return rectangleGraphics;
	}
}

export default GridBuilder;