import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'Calculadora'
})

export class CalculadoraPipe implements PipeTransform{

    //dato | Calculadora: otroDato
    //param1              param2

    transform(value:any,value_two:any){
        let operaciones = `
        suma: ${value+value_two}<br>
        Resta: ${value-value_two}<br>
        Multiplicación: ${value*value_two}<br>
        División: ${value/value_two}<br>        
        `;

        return operaciones;
    }

}