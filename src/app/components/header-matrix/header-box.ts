import { Box } from 'src/app/model/box';
import { Line } from 'src/app/model/line';

export class HeaderBox {
    ID: number;
    name: string;
    display: string;
    icon: string;
    precedingPaddingX = 0 ;
    boxMatrix: Box;
    lineMatrix: Line;
}
