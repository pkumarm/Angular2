import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HelloworldComponentComponent } from './helloworld-component/helloworld-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponentComponent
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
