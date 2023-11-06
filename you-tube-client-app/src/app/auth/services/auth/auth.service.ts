import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authTokenKey = 'authToken';

  authTokenValue = 'fakeAuthToken';

  constructor() {
    this.isLoggedIn = this.checkLoginStatus();
  }

  isLoggedIn: boolean;

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
}
