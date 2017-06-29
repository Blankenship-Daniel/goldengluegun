import { TestBed, inject } from '@angular/core/testing';

import { BloguserinfosService } from './bloguserinfos.service';

describe('BloguserinfosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloguserinfosService]
    });
  });

  it('should ...', inject([BloguserinfosService], (service: BloguserinfosService) => {
    expect(service).toBeTruthy();
  }));
});
