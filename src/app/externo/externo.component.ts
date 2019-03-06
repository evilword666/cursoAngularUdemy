import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user:any;
  public userId:number;
  public fecha:any;
  public new_user:any;
  public usuario_guardado:any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 4;
    this.new_user = {
      "name":"",
      "job":"",
    };
   }

  ngOnInit() {
    this.fecha = new Date(2019,5,20)

    /*
    this._peticionesService.getUsers(this.userId).subscribe(


      result => {
        console.log(result)
        this.user = result.data;
      },
      error =>{
        console.log(<any>error)        
      }
    );

*/
this.cargaUsuario();
  }//Fin funcion ngOnInit

  cargaUsuario(){
    this.user=false;

    this._peticionesService.getUsers(this.userId).subscribe(


      result => {
        console.log(result)
        this.user = result.data;
      },
      error =>{
        console.log(<any>error)
        
      }

    );

  }

onSubmit(form){
  this._peticionesService.addUser(this.new_user).subscribe(
    response=>{
      this.usuario_guardado = response;
      console.log(response)
      form.reset();
    },
    error=>{
      console.log(<any>error);
    }
  )
}


}
