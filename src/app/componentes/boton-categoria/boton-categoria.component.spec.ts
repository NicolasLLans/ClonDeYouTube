import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCategoriaComponent } from './boton-categoria.component';

describe('BotonCategoriaComponent', () => {
  let component: BotonCategoriaComponent;
  let fixture: ComponentFixture<BotonCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
