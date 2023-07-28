import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from '../email-domain-constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private userService: UserService) {
    
  }

  login(form: NgForm): void {
      if (form.invalid) {
          return;
      }

      const value: {email: string, password: string} = form.value;
      
      const user = this.userService.loginUser(value.email, value.password);
      
  }
}
