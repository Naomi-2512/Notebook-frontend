import { Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    {path:'', component:RegistrationComponent},
    {path:'login', component:LoginComponent},
    {path:'reset',component:ResetPasswordComponent},
    {path:'dashboard',component:UserDashboardComponent}
];
