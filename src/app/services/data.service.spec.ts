import { TestBed } from '@angular/core/testing';

import { DataCovers } from './data.service';

describe('DataService', () => {
  let service: DataCovers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCovers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
