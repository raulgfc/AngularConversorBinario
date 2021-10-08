import { Component } from "@angular/core";


@Component({
    selector: 'app-conversorBinario', //seletor entrara em uso na chamada do HTML, TypeScript, CSS, etc..
    templateUrl:'./conversorBinario.component.html', //apontando o html principal, pode substituir link pelo
})

export class ConversorBinarioComponent{ //vincular ao app.modules sempre!
    //definindo variaveis
    numBinario: string;

    constructor(){
        this.numBinario = " ";
    }


    onConverterBinario(){ //criando um metodo
        console.log('Convertendo valor binario...');
    }

}