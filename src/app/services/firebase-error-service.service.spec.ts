import { TestBed } from '@angular/core/testing';

import { FirebaseErrorServiceService } from './firebase-error-service.service';

describe('FirebaseErrorServiceService', () => {
  let service: FirebaseErrorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseErrorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
