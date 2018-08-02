import { TestBed, inject } from '@angular/core/testing';

import { ModulebService } from './moduleb.service';

describe('ModulebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModulebService]
    });
  });

  it('should be created', inject([ModulebService], (service: ModulebService) => {
    expect(service).toBeTruthy();
  }));
});
