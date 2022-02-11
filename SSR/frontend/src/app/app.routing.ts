import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home';
import { LoginComponent } from './component/login';
import { RegisterComponent } from './component/register';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);