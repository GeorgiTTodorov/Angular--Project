import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CoreModule } from './core/core.module';
import { ViewsModule } from './views/views.module';
import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaxCountDirective } from './directives/max-count.directive';
import { EmailDirective } from './directives/email.directive';
import { AuthGuardService } from './services/auth-guard.service';

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
    ViewsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
