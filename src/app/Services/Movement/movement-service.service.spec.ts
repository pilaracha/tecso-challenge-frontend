import { TestBed } from '@angular/core/testing';

import { MovementServiceService } from './movement-service.service';

describe('MovementServiceService', () => {
  let service: MovementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
