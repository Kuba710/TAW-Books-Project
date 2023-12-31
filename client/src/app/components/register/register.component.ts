import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public credentials = {
    name: '',
    email: '',
    password: '',
    };

  constructor(private authService: AuthService, public router: Router) {
  }

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/']);
  }
}
