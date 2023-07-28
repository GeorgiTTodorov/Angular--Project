import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { CollectionComponent } from './views/collection/collection.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: MainComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'articles', component: CollectionComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
