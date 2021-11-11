import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LibroListaComponent} from "./libro-lista/libro-lista.component";
import {LibroDetalleComponent} from "./libro-detalle/libro-detalle.component";
import {LibroImagenesComponent} from "./libro-imagenes/libro-imagenes.component";
import {LibroOpinionesComponent} from "./libro-opiniones/libro-opiniones.component";


const rutas: Routes = [
  {
    path: '',
    component: LibroListaComponent
  },
  {
    path: 'libro/:id',
    component: LibroDetalleComponent,
    children: [
      {
        path: 'imagenes',
        component: LibroImagenesComponent
      },
      {
        path: 'opiniones',
        component: LibroOpinionesComponent
      },
      {
        path: '',
        redirectTo: 'imagenes',
        pathMatch: 'full'
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class LibrosRoutingModule { }
