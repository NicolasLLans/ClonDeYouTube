import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private appComponent:AppComponent) { }

  ngOnInit(): void {
  }

  llamarCambiarClase(){
    this.appComponent.cambiarClase()
  }
}