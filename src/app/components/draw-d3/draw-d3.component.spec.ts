import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawD3Component } from './draw-d3.component';

describe('DrawD3Component', () => {
  let component: DrawD3Component;
  let fixture: ComponentFixture<DrawD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
