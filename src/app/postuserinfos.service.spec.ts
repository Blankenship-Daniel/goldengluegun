import { TestBed, inject } from '@angular/core/testing';

import { PostuserinfosService } from './postuserinfos.service';

describe('PostuserinfosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostuserinfosService]
    });
  });

  it('should ...', inject([PostuserinfosService], (service: PostuserinfosService) => {
    expect(service).toBeTruthy();
  }));
});
