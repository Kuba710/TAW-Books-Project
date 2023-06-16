import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public credentials = {
    login: '',
    password: ''
  };

  constructor(private authService: AuthService, public router: Router) {
  }

  signIn() {
    return this.authService.authenticate(this.credentials).subscribe((result) => {
      if (!result) {
        console.log("Blad logowania")
      } else {
        this.credentials = {
          login: '',
          password: ''
        };
        this.router.navigate(['/home']);
        window.location.reload();
      }
    });
    }
}
