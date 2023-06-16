import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private authService: AuthService,
    public router: Router
  ) {}

  isUserAuthenticated(): boolean {
    return this.authService.isUserAuthenticated;
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
