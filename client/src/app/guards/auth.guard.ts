import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (!this.authService.isUserAuthenticated) {
      return true;
    } else {
      return this.router.parseUrl('/home');
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuardBackwards implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.isUserAuthenticated) {
      return true;
    } else {
      return this.router.parseUrl('/home');
    }
  }
}