import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
  ) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(e: Event) {
    e.preventDefault();
    const login = this.loginForm.get('login')?.value;
    const password = this.loginForm.get('password')?.value;

    if (login && password) {
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
}
