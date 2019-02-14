import { Component } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';


@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.Component.html'      
  })


  export class ZapatillasComponent {
      public titulo:string = "Componente de zapatillas";
      public zapatillas:Array<Zapatilla>;
      public marcas:String[];

      constructor(){
            this.marcas = new Array();

            this.zapatillas = [
                  new Zapatilla('Rebook classic','Rebook','Blanco',190,true),
                  new Zapatilla('nike runner','nike','rebook',80,false),
                  new Zapatilla('Rebook classic','Rebook','Blanco',60,true),
                  new Zapatilla('Rebook classic','Rebook','Blanco',60,true),
                  new Zapatilla('Addidas yezzy','addidas','azules',180,true)            
            ];
      }

      ngOnInit(): void {
            console.log(this.zapatillas);
            this.getMarcas();
      }

      getMarcas(){
            this.zapatillas.forEach((zapatilla, index) => {

                  if(this.marcas.indexOf(zapatilla.marca) < 0){
                        this.marcas.push(zapatilla.marca);
                  }
                  /*
                  this.marcas.push(zapatilla.marca);  
                  console.log(index);
                  */

            });
      }

  }