import { TestBed, inject } from '@angular/core/testing';

import { DealerDataService } from './dealer-data.service';

describe('DealerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealerDataService]
    });
  });

  it('should be created', inject([DealerDataService], (service: DealerDataService) => {
    expect(service).toBeTruthy();
  }));
});
