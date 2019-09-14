import { TestBed } from '@angular/core/testing';

import { DrawshapeService } from './drawshape.service';

describe('DrawshapeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawshapeService = TestBed.get(DrawshapeService);
    expect(service).toBeTruthy();
  });
});
