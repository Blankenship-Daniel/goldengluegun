import { TestBed, inject } from '@angular/core/testing';

import { PageviewsService } from './pageviews.service';

describe('PageviewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageviewsService]
    });
  });

  it('should ...', inject([PageviewsService], (service: PageviewsService) => {
    expect(service).toBeTruthy();
  }));
});
