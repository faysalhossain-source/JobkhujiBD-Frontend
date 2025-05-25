import { TestBed } from '@angular/core/testing';

import { CreateApplyJobService } from './create-apply-job.service';

describe('CreateApplyJobService', () => {
  let service: CreateApplyJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateApplyJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
