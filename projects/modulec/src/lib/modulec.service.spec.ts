import { TestBed, inject } from '@angular/core/testing';

import { ModulecService } from './modulec.service';

describe('ModulecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModulecService]
    });
  });

  it('should be created', inject([ModulecService], (service: ModulecService) => {
    expect(service).toBeTruthy();
  }));
});
