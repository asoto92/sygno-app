import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*  */
@NgModule({
  /* EL declarations SIGNIFICA QUE EN EL SE PONEN LOS MODULOS O DIRECTIVAS QUE SON PARTE DE ESTE MODULO (AppModule) */
  declarations: [
    /* AppComponent ES UN MODULO  */
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  /* EN exports SE INDICAN LOS MODULOS QUE PUEDEN SER REFERENCIADOS POR OTROS MODULOS */
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
