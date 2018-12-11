import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home';
import { AdminComponent } from './modules/admin';
import { LoginComponent } from './modules/user/login';
import { AuthGuard } from './shared/_guards';
import { Role } from './shared/_models';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);