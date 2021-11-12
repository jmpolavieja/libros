import { Component, OnInit } from '@angular/core';
import {Libro} from "../libro.model"
import {LibroService} from "../../servicios/libro.service";
import {LoggerService} from "../../servicios/logger.service";


@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit {

  libros: Libro[] = [];

  constructor(private libroService: LibroService,
              private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.libroService.getLibros()
      .then( libros => {
        this.loggerService.log("Ejecución del primer then");
        return libros;
      })
      .then( libros => {
        this.loggerService.log("Ejecución del segundo then");
        return new Promise<Libro[]>( (resolve,reject) => {
          this.loggerService.log("Inicio ejecutor (Promise del 2º then");
          setTimeout(() => {
            this.loggerService.log("Fin ejecutor (Promiese del 2º then)");
            resolve(libros);
          }, 5000);
        });
      }).then( libros => {
        this.loggerService.log("Ejecución del 3er then");
        this.libros = libros
    });
  }

}
