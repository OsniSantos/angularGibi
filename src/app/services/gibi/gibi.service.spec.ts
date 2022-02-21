import { TestBed } from '@angular/core/testing';

import { GibiService } from './gibi.service';

describe('GibiService', () => {
  let service: GibiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GibiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
