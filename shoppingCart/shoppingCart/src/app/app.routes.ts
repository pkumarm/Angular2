import { Routes, RouterModule }  from '@angular/router';
import { LoginScreenComponent } from './Login-screen/login-screen.component';
import { LoginActionComponent } from './login-action/login-action.component';
import { RegistrationActionComponent } from './registration-action/registration-action.component';
// Route config let's you map routes to components
export const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'login-screen',
    component: LoginScreenComponent,
  },
   { path: 'app-login-action', component: LoginActionComponent },
   { path: 'app-registration-action', component: RegistrationActionComponent },
];

export const appRouterModule = RouterModule.forRoot(routes);