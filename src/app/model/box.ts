import { Point } from './point';
import { Shape } from './shape';

export class Box extends Shape {
    startPoint: Point;
    width: number;
    height: number;
}
