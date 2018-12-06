import { TestBed } from '@angular/core/testing';

import { NgxSplitDashboardService } from './ngx-split-dashboard.service';

describe('NgxSplitDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSplitDashboardService = TestBed.get(NgxSplitDashboardService);
    expect(service).toBeTruthy();
  });
});
