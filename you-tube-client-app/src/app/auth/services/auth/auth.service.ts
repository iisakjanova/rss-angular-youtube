import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authTokenKey = 'authToken';

  authTokenValue = 'fakeAuthToken';

  // BehaviorSubject to emit the login status
  private isLoggedInSubject: BehaviorSubject<boolean>;

  // Observable that clients can subscribe to for login status changes
  isLoggedIn$: Observable<boolean>;

  constructor() {
    // Initialize the BehaviorSubject with the current login status
    this.isLoggedInSubject = new BehaviorSubject<boolean>(this.checkLoginStatus());

    // Expose the BehaviorSubject as an observable
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }

  saveAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  removeAuthToken() {
    localStorage.removeItem(this.authTokenKey);
  }

  checkLoginStatus(): boolean {
    const authToken = localStorage.getItem(this.authTokenKey);
    return !!authToken;
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLoggedIn = true;
        this.saveAuthToken(this.authTokenValue);
      }),
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.removeAuthToken();
  }

  get isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  set isLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }
}
