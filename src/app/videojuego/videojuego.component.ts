import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


@Component({
  selector: `videojuego`,
  templateUrl: './videojuego.component.html'

  
})
export class Videojuego implements OnInit, DoCheck, OnDestroy {

    public titulo:string;
    public listado:string;

    constructor(){
        this.titulo = "Componente de videojuegos XD"
        this.listado = "Listado de los juegos mas populares";        
        console.log("Se ha cargado el complemento videojuego")
    }

    ngOnInit(){
        //console.log("ngOnInit es ejecutado!!!")

    }

    ngDoCheck(){
        //console.log("ngDoCheck ejecutado")
    }

    ngOnDestroy(){
        //console.log("ngOnDestroy ejecutado")
    }

    cambiarTitulo(){
      //this.titulo = "Nuevo titulo del componente";
    }

}
