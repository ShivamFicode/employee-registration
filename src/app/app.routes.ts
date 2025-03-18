import { Routes } from '@angular/router';
import { LoginSignupComponentComponent } from './components/login-signup-component/login-signup-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'loginSigup',
        pathMatch: 'full'
    },
    {
        path: 'loginSigup',
        component: LoginSignupComponentComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];
