import {Injectable} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';


@Injectable()
export class ZapatillaService{
    public zapatillas:Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Rebook classic','Rebook','Blanco',190,true),
            new Zapatilla('nike runner','Nike','rebook',80,false),
            new Zapatilla('Rebook classic','Rebook','Blanco',60,true),
            new Zapatilla('Rebook classic','Rebook','Blanco',60,true),
            new Zapatilla('Addidas yezzy','addidas','azules',180,true)            
      ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}
