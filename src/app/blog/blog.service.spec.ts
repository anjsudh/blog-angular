import { TestBed, inject } from '@angular/core/testing';

import { BlogsServiceService } from './blog.service';

describe('BlogsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogsServiceService]
    });
  });

  it('should be created', inject([BlogsServiceService], (service: BlogsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
