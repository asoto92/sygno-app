import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosModule } from './articulos/articulos.module';
import { AuthModule } from './auth/auth.module';

/*  */
@NgModule({
  /* EL declarations SIGNIFICA QUE EN EL SE PONEN LOS MODULOS O DIRECTIVAS QUE SON PARTE DE ESTE MODULO (AppModule) */
  declarations: [
    /* AppComponent ES UN MODULO  */
    AppComponent
  ],
  
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    ArticulosModule
  ],


  /* EN exports SE INDICAN LOS MODULOS QUE PUEDEN SER REFERENCIADOS POR OTROS MODULOS */
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
