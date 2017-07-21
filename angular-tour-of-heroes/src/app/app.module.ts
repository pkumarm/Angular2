import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HerodetailComponent } from './herodetail/herodetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HerodetailComponent
  ],
  imports: [
    BrowserModule,
     FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
