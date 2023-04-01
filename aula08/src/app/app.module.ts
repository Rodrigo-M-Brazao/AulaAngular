import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgForComponent } from './views/exemplo-ng-for/exemplo-ng-for.component';
import { Ex1Component } from './views/ex1/ex1.component';


@NgModule({
  declarations: [
    AppComponent,
    ExemploNgForComponent,
    Ex1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
