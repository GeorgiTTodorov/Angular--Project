import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from '../email-domain-constants';
import { emailValidator } from '../app-email-validator';
import { matchPasswords } from '../match-passwords-validator';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emailDomains = DEFAULT_EMAIL_DOMAINS;
  

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, emailValidator(this.emailDomains)]],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(11)]],
      repeatPassword: ['', [Validators.required]]
    },
    {
      validators: [matchPasswords('password', 'repeatPassword')],
    })
  })


  constructor(private fb: FormBuilder, private userService: UserService) {}

    register(): void {
      if (this.form.invalid) {
          return;
      }
      
      const username = this.form.value.username!;
      const email = this.form.value.email!;
      const password = this.form.value.passGroup?.password!;
      const uniqueId = new Date().getTime().toString() + Math.random().toString(36).substring(2)
      
      this.userService.registerUser({username, email, password,  id: uniqueId})
            
      
    }
}
