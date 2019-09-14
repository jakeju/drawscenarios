import { Shape } from './shape';

export class Point extends Shape {
    x: number;
    y: number;
    constructor( x: number = 0, y: number = 0, shapeType = 'Point') {
        super(shapeType);
        this.x = x;
        this.y = y;
    }

}
