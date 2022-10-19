import { TestBed } from '@angular/core/testing';

import { ServicioGuardarService } from './servicio-guardar.service';

describe('ServicioGuardarService', () => {
  let service: ServicioGuardarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioGuardarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
