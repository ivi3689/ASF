import { TestBed, inject } from '@angular/core/testing';

import { RegistrateService } from './registrate.service';

describe('RegistrateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrateService]
    });
  });

  it('should be created', inject([RegistrateService], (service: RegistrateService) => {
    expect(service).toBeTruthy();
  }));
});
