import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";
import {LIBROS} from "../libros/mocks";
import {Libro} from "../libros/libro.model";

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private loggerService: LoggerService) { }

  getLibros(): Promise<Libro[]>{
    return new Promise<Libro[]>( (resolve, reject) => {
      this.loggerService.log("Inicio ejecutor (Promise de LibroService.getLibros() )");
      setTimeout( ()=>{
        this.loggerService.log("Fin ejecutor (Promise de LibroService.getLibtos() )");
        resolve(LIBROS);
      }, 5000);
    });
  }
}
