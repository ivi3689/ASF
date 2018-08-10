import { TestBed, inject } from '@angular/core/testing';

import { CalculosTablasService } from './calculos-tablas.service';

describe('CalculosTablasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculosTablasService]
    });
  });

  it('should be created', inject([CalculosTablasService], (service: CalculosTablasService) => {
    expect(service).toBeTruthy();
  }));
});
