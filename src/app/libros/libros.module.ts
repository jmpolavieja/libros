import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LibroOpinionesComponent} from "./libro-opiniones/libro-opiniones.component";
import {LibroImagenesComponent} from "./libro-imagenes/libro-imagenes.component";
import {LibroListaComponent} from "./libro-lista/libro-lista.component";
import {LibroDetalleComponent} from "./libro-detalle/libro-detalle.component";
import { LibrosRoutingModule } from './libros-routing.module';

@NgModule({
  declarations: [
    LibroOpinionesComponent,
    LibroImagenesComponent,
    LibroListaComponent,
    LibroDetalleComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
