import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from '../email-domain-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor() {
   
  }

  login(form: NgForm): void {
      if (form.invalid) {
          return;
      }

      const value: {email: string, password: string} = form.value;
      console.log(value);
            
  }
}
