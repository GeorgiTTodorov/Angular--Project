import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from '../email-domain-constants';
import { emailValidator } from '../app-email-validator';
import { matchPasswords } from '../match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emailDomains = DEFAULT_EMAIL_DOMAINS;
  

  form = this.fb.group({
    username: ['username', [Validators.required, Validators.minLength(4)]],
    email: ['email', [Validators.required, emailValidator(this.emailDomains)]],
    passGroup: this.fb.group({
      password: ['password', [Validators.required, Validators.minLength(4), Validators.maxLength(11)]],
      repeatPassword: ['repeatPassword', [Validators.required]]
    },
    {
      validators: [matchPasswords('password', 'repeatPassword')],
    })
  })


  constructor(private fb: FormBuilder) {}

    register(): void {
      if (this.form.invalid) {
          return;
      }
      
      console.log(this.form.value);
      
    }
}
