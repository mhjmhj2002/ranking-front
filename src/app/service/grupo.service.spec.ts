import { TestBed } from '@angular/core/testing';

import { HttpProviderService } from './grupo.service';

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
