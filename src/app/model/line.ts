import { Point } from './point';
import { Shape } from './shape';

export class Line extends Shape {
    startPoint: Point;
    endPoint: Point;
    constructor(startX: number = 0, startY: number = 0, endX: number = 0, endY: number = 0, shapeType = 'line') {
        super(shapeType);
        this.startPoint = new Point(startX, startY);
        this.endPoint = new Point(endX, endY);
    }
    getDimension() {
        // tslint:disable-next-line: no-unused-expression
        return (this.startPoint.x, this.startPoint.y, this.endPoint.x, this.endPoint.y);
    }
    setDimension(startX: number, startY: number, endX: number, endY: number) {
        this.startPoint.x = startX;
        this.startPoint.y = startY;
        this.endPoint.x = endX;
        this.endPoint.y = endY;
    }
    getStartPoint() {
        // tslint:disable-next-line: no-unused-expression
        return (this.startPoint.x, this.startPoint.y);
    }
    getEndPoint() {
        // tslint:disable-next-line: no-unused-expression
        return (this.endPoint.x, this.endPoint.y);
    }

}
