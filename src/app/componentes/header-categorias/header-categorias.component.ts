import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-header-categorias',
  templateUrl: './header-categorias.component.html',
  styleUrls: ['./header-categorias.component.css']
})
export class HeaderCategoriasComponent implements OnInit {

  @ViewChild('barraRef', { static: true }) barraRef!: ElementRef;

  scrollIzquierda(): void {
    this.barraRef.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }

  scrollDerecha(): void {
    this.barraRef.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
