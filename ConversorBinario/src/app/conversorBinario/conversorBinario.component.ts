import { Component } from "@angular/core";

@Component({
    selector: 'app-conversorBinario', //seletor entrara em uso na chamada do HTML e TypeScript
    templateUrl:'./conversorBinario.component.html',
})

export class ConversorBinarioComponent{ //vincular ao app.modules sempre!

    onConverterBinario(){ //criando um metodo
        console.log('Convertendo valor binario...');
    }

}