import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  constructor(public authService: AuthService, public router: Router) {
  }

  login(e: Event) {
    e.preventDefault();

    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/youtube';

        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
        };

        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }
}
