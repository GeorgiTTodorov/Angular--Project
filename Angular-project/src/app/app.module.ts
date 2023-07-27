import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule } from '@angular/forms';
import { MaxCountDirective } from './directives/max-count.directive';
import { EmailDirective } from './directives/email.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AsideComponent,
    PrivacyPolicyComponent,
    LoginComponent,
    RegisterComponent,
    MaxCountDirective,
    EmailDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
