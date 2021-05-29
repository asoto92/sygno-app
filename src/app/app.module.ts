import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';

/*  */
@NgModule({
  /* EL declarations SIGNIFICA QUE EN EL SE PONEN LOS MODULOS O DIRECTIVAS QUE SON PARTE DE ESTE MODULO (AppModule) */
  declarations: [
    /* AppComponent ES UN MODULO  */
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  /* EN exports SE INDICAN LOS MODULOS QUE PUEDEN SER REFERENCIADOS POR OTROS MODULOS */
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
