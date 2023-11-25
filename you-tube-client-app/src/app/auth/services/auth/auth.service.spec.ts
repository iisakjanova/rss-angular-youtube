import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

const mock = (() => {
  const store: { [key: string]: string | undefined } = {};

  return {
    getItem: (key: string) => store[key],
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      Object.keys(store).forEach((key) => {
        delete store[key];
      });
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: mock });

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial login status as false', () => {
    expect(service.isLoggedIn).toBe(false);
  });

  it('should set login status to true after login', () => {
    service.login().subscribe(() => {
      expect(service.isLoggedIn).toBe(true);
    });
  });

  it('should save and retrieve auth token correctly', () => {
    const fakeToken = 'newFakeToken';

    // Assert that getItem was initially called with the correct key
    expect(mock.getItem(service.authTokenKey)).toBeUndefined();

    // Call function
    service.saveAuthToken(fakeToken);

    // Assert that getItem was called with the correct key after the function call
    expect(mock.getItem(service.authTokenKey)).toBe(fakeToken);
  });

  // Restore the original localStorage after the test
  afterAll(() => {
    Object.defineProperty(window, 'localStorage', { value: localStorage });
  });
});
