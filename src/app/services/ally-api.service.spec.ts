import { TestBed, inject } from '@angular/core/testing';

import { AllyApiService } from './ally-api.service';

describe('AllyApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllyApiService]
    });
  });

  it('should be created', inject([AllyApiService], (service: AllyApiService) => {
    expect(service).toBeTruthy();
  }));
});
