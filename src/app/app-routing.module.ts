import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SaludoComponent} from "./saludo/saludo.component";

const rutas: Routes= [
  {
    path: 'saludo',
    component: SaludoComponent
  },
  {
    path: 'libros',
    loadChildren: () => import('./libros/libros.module').then( m => m.LibrosModule)
  },
  {
    path: '',
    redirectTo: '/saludo',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }

]


@NgModule({
    imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
