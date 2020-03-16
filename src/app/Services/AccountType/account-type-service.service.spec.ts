import { TestBed } from '@angular/core/testing';

import { AccountTypeServiceService } from './account-type-service.service';

describe('AccountTypeServiceService', () => {
  let service: AccountTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
