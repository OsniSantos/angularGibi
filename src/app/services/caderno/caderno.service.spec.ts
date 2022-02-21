import { TestBed } from '@angular/core/testing';

import { CadernoService } from './caderno.service';

describe('CadernoService', () => {
  let service: CadernoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadernoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
