import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosCreateComponent } from './articulos/articulos-create/articulos-create.component';
import { ArticulosListComponent } from './articulos/articulos-list/articulos-list.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'articulos', component:ArticulosComponent,
   children: [
     {path:'list',component:ArticulosListComponent},
     {path:'create',component:ArticulosCreateComponent}
   ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
