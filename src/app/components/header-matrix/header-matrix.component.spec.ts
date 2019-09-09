import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMatrixComponent } from './header-matrix.component';

describe('HeaderMatrixComponent', () => {
  let component: HeaderMatrixComponent;
  let fixture: ComponentFixture<HeaderMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
