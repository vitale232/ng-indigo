import { TestBed } from '@angular/core/testing';

import { NgIndigoService } from './ng-indigo.service';

describe('NgIndigoService', () => {
  let service: NgIndigoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgIndigoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
