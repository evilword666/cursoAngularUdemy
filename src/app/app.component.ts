import { Component } from '@angular/core';
import {Configuracion } from './models/configuracion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = "";
  public descripcion = "";
  public config;
  public mostrar_videojuegos:boolean = true;
  
constructor(){
  this.title = Configuracion.titulo;
  this.descripcion = Configuracion.descripcion;
  this.config = Configuracion;
}


ocultarMostrarVideojuegos(value){
  this.mostrar_videojuegos = value;
}

mostrarVideojuegos(){
  this.mostrar_videojuegos = true;
}

}
