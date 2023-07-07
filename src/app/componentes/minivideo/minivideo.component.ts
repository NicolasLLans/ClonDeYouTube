import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';


@Component({
  selector: 'app-minivideo',
  templateUrl: './minivideo.component.html',
  styleUrls: ['./minivideo.component.css']
})
export class MinivideoComponent implements OnInit {

  datos:any;

  constructor(private gservice:GeneralService) { }

  ngOnInit(): void {

    this.gservice.obtenerDatos().subscribe(
      (response:any) => {
      this.datos = response;
      // console.log(this.datos);
    });
  }

}
function JSONstringify(): any {
  throw new Error('Function not implemented.');
}

