import { TestBed, inject } from '@angular/core/testing';

import { PostApiService } from './post-api.service';

describe('PostApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostApiService]
    });
  });

  it('should be created', inject([PostApiService], (service: PostApiService) => {
    expect(service).toBeTruthy();
  }));
});
