import { TestBed } from '@angular/core/testing';

import { DummyDataBaseService } from './dummy-data-base.service';

describe('DummyDataBaseService', () => {
  let service: DummyDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
