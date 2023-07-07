import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-boton-categoria',
  templateUrl: './boton-categoria.component.html',
  styleUrls: ['./boton-categoria.component.css']
})
export class BotonCategoriaComponent implements OnInit {
  datos: any;

  constructor(private gservice:GeneralService) { }

  ngOnInit(): void {
    this.gservice.obtenerDatos().subscribe(
      (response:any) => {
      this.datos = response;
      // for (let i = 0; i < this.datos.length; i++) {
      //   console.log(this.datos[i].categoria);
      // }
    });
  }

}
