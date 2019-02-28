import {Injectable} from  '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs';


@Injectable()
export class PeticionesService{
    public url:string;

    constructor(
        public _http:HttpClient
    ){
        this.url = "https://reqres.in/";
        
    }

    getUsers(userId) : Observable<any>{
        return this._http.get(this.url+'api/users/'+userId)
    }



    
}