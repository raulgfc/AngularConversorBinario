import { Component, EventEmitter, Output } from "@angular/core"; //declarei EventEmitter e Output


@Component({
    selector: 'app-conversorBinario', //seletor entrara em uso na chamada do HTML, TypeScript, CSS, etc..
    templateUrl:'./conversorBinario.component.html', //apontando o html principal, pode substituir link pelo
})

export class ConversorBinarioComponent{ //vincular ao app.modules sempre!
    @Output() numBinarioAdicionado = new EventEmitter(); 

    //definindo variaveis
    numBinario: string | null;
    numDecimal: number | null;

    constructor(){
        this.numBinario = null;
        this.numDecimal = null;
    }

    onConverterBinario(){ //criando um metodo
        console.log('Convertendo valor binario...');
        let numBinario = this.numBinario;
        let numDecimal = this.numDecimal;

        if (numBinario != null ) //verdadeiro
        {
           this.numDecimal = parseInt(numBinario,2);
        }
        else{
            this.numDecimal = null;
        }
        return numDecimal;

    };
    
}
