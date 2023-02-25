import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './views/date/date.component';
import { AboutComponent } from './views/about/about.component';
import { NameComponent } from './views/name/name.component';
import { TextComponent } from './views/text/text.component';
import { InterpolacaoComponent } from './views/interpolacao/interpolacao.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AboutComponent,
    NameComponent,
    TextComponent,
    InterpolacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
