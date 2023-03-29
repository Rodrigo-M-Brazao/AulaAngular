import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './function/event/event.component';
import { Ex04Component } from './views/ex04/ex04.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    Ex04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
