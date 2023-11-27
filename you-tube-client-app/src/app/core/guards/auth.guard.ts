import { inject } from '@angular/core';
import {
  NavigationExtras,
  Router,
} from '@angular/router';

import { AuthService } from '../../auth/services/auth/auth.service';

export const authGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLoggedIn) {
    return true;
  }

  const sessionId = 123456789;

  const navigationExtras: NavigationExtras = {
    queryParams: { session_id: sessionId },
  };

  return router.createUrlTree(['/login'], navigationExtras);
};
