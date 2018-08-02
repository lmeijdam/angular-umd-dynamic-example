import { TestBed, inject } from '@angular/core/testing';

import { ModuledService } from './moduled.service';

describe('ModuledService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuledService]
    });
  });

  it('should be created', inject([ModuledService], (service: ModuledService) => {
    expect(service).toBeTruthy();
  }));
});
