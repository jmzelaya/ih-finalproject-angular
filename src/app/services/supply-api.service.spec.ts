import { TestBed, inject } from '@angular/core/testing';

import { SupplyApiService } from './supply-api.service';

describe('SupplyApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplyApiService]
    });
  });

  it('should be created', inject([SupplyApiService], (service: SupplyApiService) => {
    expect(service).toBeTruthy();
  }));
});
