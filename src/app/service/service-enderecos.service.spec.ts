import { TestBed } from '@angular/core/testing';

import { ServeEnderecosService } from './serve-enderecos.service';

describe('ServeEnderecosService', () => {
  let service: ServeEnderecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeEnderecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
