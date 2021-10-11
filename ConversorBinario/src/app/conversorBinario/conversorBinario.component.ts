import { Component, EventEmitter, Output } from "@angular/core"; //declarei EventEmitter e Output

function binarioParaDecimal(numBi){
    return numBi.split('').reverse().reduce(function(x, y, i){
      return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
  }

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
           this.numDecimal = binarioParaDecimal(numBinario);
        }
        else{
            this.numDecimal = null;
        }
        return numDecimal;

    };
    
}

