import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-libro-opiniones',
  templateUrl: './libro-opiniones.component.html',
  styleUrls: ['./libro-opiniones.component.css']
})
export class LibroOpinionesComponent implements OnInit {

  idLibro: number = 0;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta.parent?.paramMap.subscribe(
      (params) => {
        this.idLibro = parseInt(<string>params.get('id'));
      });
  }

}
