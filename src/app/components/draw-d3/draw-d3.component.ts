import { Component, ElementRef, OnInit, Input } from '@angular/core';
import * as D3 from 'd3/index';
import { read } from 'fs';

@Component({
  selector: 'app-draw-d3',
  templateUrl: './draw-d3.component.html',
  styleUrls: ['./draw-d3.component.scss']
})
export class DrawD3Component implements OnInit {
  erroMessage: string;
  host: any;
  svg: any;
  width = 600;
  height = 400;
  @Input()
  headerBoxs: any;
  constructor(private element: ElementRef) {
    this.host = D3.select(this.element.nativeElement);
  }

  ngOnInit() {
    this.buildSVG();
  }
  buildSVG(): void {
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .style('background-color', 'blue');

    this.svg.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 40)
      .attr('height', 20)
      .attr('fill', 'red');
  }

}
