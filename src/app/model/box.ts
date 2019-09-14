import { Point } from './point';
import { Shape } from './shape';

export class Box extends Shape {
    constructor(shapeType = 'rect') {
        super(shapeType);
    }

    startPoint: Point;
    width: number;
    height: number;
}
