import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-libro-imagenes',
  templateUrl: './libro-imagenes.component.html',
  styleUrls: ['./libro-imagenes.component.css']
})
export class LibroImagenesComponent implements OnInit {

  libroId: number = 0;

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.parent?.paramMap.subscribe(
      (params: ParamMap) => {
        this.libroId = parseInt(<string>params.get('id'));
      });
  }
}
