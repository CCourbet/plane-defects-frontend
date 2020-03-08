import { TestBed } from '@angular/core/testing';

import { DefectService } from './defect.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DefectService', () => {
  let service: DefectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DefectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
