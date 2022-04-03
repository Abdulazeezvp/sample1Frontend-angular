import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { IndexComponent } from './index/index.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'register', component: CreateUserComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'home', component: UserHomeComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
