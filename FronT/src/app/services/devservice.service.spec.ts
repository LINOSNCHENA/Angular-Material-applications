import { TestBed } from '@angular/core/testing';

import { DevserviceService } from './devservice.service';

describe('DevserviceService', () => {
  let service: DevserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
