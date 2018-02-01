import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import {LoginServiceService} from './login-service.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import { UserProfileComponentComponent } from './user-profile-component/user-profile-component.component';
import { UserRegistrationComponentComponent } from './user-registration-component/user-registration-component.component';
import { FormsModule }   from '@angular/forms';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
export const ROUTES: Routes = [
 // { path: '', component: LoginComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  {path:'profile', component: UserProfileComponentComponent},
  {path:'registration', component: UserRegistrationComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    UserProfileComponentComponent,
    UserRegistrationComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
