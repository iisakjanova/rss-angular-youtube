import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../auth/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router) {}

  login() {
    const redirectUrl = '/login';
    this.router.navigate([redirectUrl]);
  }

  logout() {
    const redirectUrl = '/login';
    this.authService.logout();
    this.router.navigate([redirectUrl]);
  }
}
