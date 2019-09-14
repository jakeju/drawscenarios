import { Component, OnInit } from '@angular/core';
import {HeaderMatrixModel} from './header-matrix-model';
import {HeaderBox} from './header-box';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-header-matrix',
  templateUrl: './header-matrix.component.html',
  styleUrls: ['./header-matrix.component.scss']
})
export class HeaderMatrixComponent implements OnInit {
  public headerMatrixModel: HeaderMatrixModel;
  public headerBoxList: Array<HeaderBox>;

  constructor() {
    // tslint:disable-next-line: whitespace
    this.headerMatrixModel= new HeaderMatrixModel();
    this.headerBoxList = new Array<HeaderBox> ();
    this.addHeaderBox(2, 'abc', 'abc', 'box');
    this.addHeaderBox(1, 'abd', 'abc', 'box');
  }

  ngOnInit() {
  }
  addLine() {
    const tmp = new HeaderBox();

  }
  addHeaderBox(ID= 0, name: string, display: string, icon: string) {
    // tslint:disable-next-line: no-var-keyword
    // tslint:disable-next-line: prefer-const
      let tmp: HeaderBox  = new HeaderBox();
      tmp.ID = ID;
      tmp.name = name;
      tmp.display = display;
      tmp.icon = icon;
      this.headerBoxList.push(tmp);
  }
  setHeaderBoxMatrix() {
    /* tslint:disable */
    for (var i = 0; i < this.headerBoxList.length; i++) {

    }

  }

}
