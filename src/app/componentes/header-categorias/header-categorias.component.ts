import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-categorias',
  templateUrl: './header-categorias.component.html',
  styleUrls: ['./header-categorias.component.css']
})
export class HeaderCategoriasComponent implements OnInit {
  @ViewChild('barraRef', { static: true }) barraRef!: ElementRef;
  mostrarBotonIzquierdo = false;

  scrollIzquierda(): void {
    this.barraRef.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
    this.toggleBotonDerecha(true); // Mostrar el botón derecho al hacer clic en el botón izquierdo

    if (this.barraRef.nativeElement.scrollLeft === 0) {
      this.mostrarBotonIzquierdo = false; // Ocultar el botón izquierdo al llegar al inicio del scroll
    }
  }

  scrollDerecha(): void {
    this.barraRef.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
    const maxScrollLeft = this.barraRef.nativeElement.scrollWidth - this.barraRef.nativeElement.clientWidth;
    if (this.barraRef.nativeElement.scrollLeft >= maxScrollLeft) {
      this.toggleBotonDerecha(false); // Ocultar el botón derecho al llegar al final del scroll
    }
    this.mostrarBotonIzquierdo = true; // Mostrar el botón izquierdo al desplazarse hacia la derecha
  }

  toggleBotonDerecha(show: boolean): void {
    const botonDerecha = document.querySelector('.boton-derecha') as HTMLElement;
    botonDerecha.style.display = show ? 'block' : 'none';
  }

  constructor() {}

  ngOnInit(): void {
    this.mostrarBotonIzquierdo = false; // Ocultar el botón izquierdo inicialmente
  }
}
