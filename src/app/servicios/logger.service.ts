import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(mensaje: string) {
    console.log("(" + new Date().toLocaleTimeString() + ") " + mensaje);
  }
}
