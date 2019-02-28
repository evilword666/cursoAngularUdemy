import { Component } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
//import { ZapatillaService } from '../services/ZapatillaService';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.Component.html' ,
    providers:[ZapatillaService]     
  })


  export class ZapatillasComponent {
      public titulo:string = "Componente de zapatillas";
      public zapatillas:Array<Zapatilla>;
      public marcas:String[];
      public color:string;
      public mi_marca:string;

      constructor(
      private _zapatillaService:ZapatillaService //Los servicios por lo general llevan un guien bajo delante
      ){
            this.mi_marca = "Contenido de mi input";
            this.marcas = new Array();
            this.color = 'red';

      }

      ngOnInit(): void {
            
            console.log(this.zapatillas);

            this.zapatillas = this._zapatillaService.getZapatillas() 
            alert(this._zapatillaService.getTexto())
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

      getMarca(){
            alert(this.mi_marca)
      }

      addMarca(){
            this.marcas.push(this.mi_marca)
      }

      borrarMarca(index){
            
            //delete this.marcas[index];
            this.marcas.splice(index,1)
      }

      onBlur(){
            console.log("Ha salido del input")
      }

      mostrarPalabra(){
            alert(this.mi_marca)
      }

  }