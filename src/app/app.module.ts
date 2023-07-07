import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MinivideoComponent } from './componentes/minivideo/minivideo.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HeaderCategoriasComponent } from './componentes/header-categorias/header-categorias.component';
import { BotonCategoriaComponent } from './componentes/boton-categoria/boton-categoria.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MinivideoComponent,
    HeaderComponent,
    HeaderCategoriasComponent,
    BotonCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
