import { Component, EventEmitter, Output } from "@angular/core"; //declarei EventEmitter e Output


@Component({
    selector: 'app-conversorBinario', //seletor entrara em uso na chamada do HTML, TypeScript, CSS, etc..
    templateUrl:'./conversorBinario.component.html', //apontando o html principal, pode substituir link pelo
})

export class ConversorBinarioComponent{ //vincular ao app.modules sempre!
    @Output() numBinarioAdicionado = new EventEmitter(); 

    //definindo variaveis
    numBinario: number;
    numDecimal: number;

    constructor(){
        this.numBinario = 0;
        this.numDecimal = 0;
    }

    onConverterBinario(){ //criando um metodo
        console.log('Convertendo valor binario...');
        let numBinario = this.numBinario;
        let numDecimal = this.numDecimal;

        this.numDecimal = numBinario * 2;
        return null;

    };
    
}
