import { Component, OnInit } from '@angular/core';
import {Libro} from "../libro.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {LIBROS} from "../mocks";

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit {

  libro?: Libro;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params) => {
      let id = parseInt(<string>params.get('id'));
      this.libro = LIBROS.find(item => item.id === id );
    });
  }

}
