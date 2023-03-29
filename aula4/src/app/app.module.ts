import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropbindComponent } from './views/propbind/propbind.component';
import { Ex1Component } from './ex/ex1/ex1.component';

@NgModule({
  declarations: [
    AppComponent,
    PropbindComponent,
    Ex1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
