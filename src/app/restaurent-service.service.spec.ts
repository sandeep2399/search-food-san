import { TestBed } from '@angular/core/testing';

import { RestaurentServiceService } from './restaurent-service.service';

describe('RestaurentServiceService', () => {
  let service: RestaurentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
