import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ActiveusersComponent } from "src/app/active-users/active-users.component";
import { InactiveusersComponent } from "src/app/inactive-users/inactive-users.component";

@NgModule({
  declarations: [
    AppComponent,
    ActiveusersComponent,
    InactiveusersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
