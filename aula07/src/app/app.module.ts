import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgifComponent } from './views/exemplo-ngif/exemplo-ngif.component';
import { Ex1Component } from './views/ex1/ex1.component';
import { Ex2Component } from './views/ex2/ex2.component';
import { Ex3Component } from './views/ex3/ex3.component';
import { Ex4Component } from './views/ex4/ex4.component';
import { Ex5Component } from './views/ex5/ex5.component';
import { Ex1NovoComponent } from './views/ex1-novo/ex1-novo.component';
import { Ex2NovoComponent } from './views/ex2-novo/ex2-novo.component';
import { Ex3NovoComponent } from './views/ex3-novo/ex3-novo.component';
import { Ex4NovoComponent } from './views/ex4-novo/ex4-novo.component';
import { Ex5NovoComponent } from './views/ex5-novo/ex5-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgifComponent,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component,
    Ex1NovoComponent,
    Ex2NovoComponent,
    Ex3NovoComponent,
    Ex4NovoComponent,
    Ex5NovoComponent
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
