import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmailVerifyComponent } from './components/email-verify/email-verify.component';
import { LostPasswordComponent } from './components/lost-password/lost-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user-register', component: UserRegisterComponent},
  {path: 'email-verify', component: EmailVerifyComponent},
  {path: 'lost-password', component: LostPasswordComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
