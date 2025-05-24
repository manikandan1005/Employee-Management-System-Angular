import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authrGuard } from './authr.guard';

describe('authrGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authrGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
