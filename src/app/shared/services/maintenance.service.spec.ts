import { TestBed } from '@angular/core/testing';

import { MaintenanceService } from './maintenance.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MaintenanceService', () => {
  let service: MaintenanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MaintenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
