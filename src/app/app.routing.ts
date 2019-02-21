import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home';
import { AdminComponent } from './modules/admin';
import { LoginComponent } from './modules/user/login';
import { RegisterComponent } from './modules/user/register';
import { UsersListComponent } from './modules/users/users-list.component';
import { QuestionsListComponent } from './modules/questions/questions-list.component';
//import { UsersListComponent } from './modules/users/users-list.component';
import { AuthGuard } from './shared/_guards';
import { Role } from './shared/_models';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/list',
        component: UsersListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'question/list',
        component: QuestionsListComponent,
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

    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'users',
        component: RegisterComponent
    },

    // {
    //     path: 'products',
    //     canActivate: [ AuthGuard ],
    //     data: { preload: true },
    //     loadChildren: 'app/products/product.module#ProductModule'
    // },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);