import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos.component';
import { ArticulosListComponent } from './articulos-list/articulos-list.component';
import { ArticulosCreateComponent } from './articulos-create/articulos-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ArticulosComponent,
    ArticulosListComponent,
    ArticulosCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ArticulosModule { }
