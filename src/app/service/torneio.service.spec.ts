import { TestBed } from '@angular/core/testing';

import { HttpProviderService } from './torneio.service';

describe('HttpProviderService', () => {
  let service: HttpProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
