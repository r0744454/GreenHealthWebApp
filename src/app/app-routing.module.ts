import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './security/auth.guard';
import { LoginComponent } from './security/authentication/login/login.component';
import { RegisterComponent } from './security/authentication/register/register.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user', loadChildren: () => import('./authenticated/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard], canActivateChild: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
