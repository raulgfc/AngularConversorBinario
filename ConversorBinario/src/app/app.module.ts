import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //utilizado para captura/armazenamento de variaveis atraves do html
import { ConversorBinarioComponent } from './conversorBinario/conversorBinario.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; //utilizado para insercao de variaveis atraves do html
import {MatCardModule} from '@angular/material/card'; //utilizado para criacao de conteiners
import {MatButtonModule} from '@angular/material/button'; // para estilização dos botões
import {MatToolbarModule} from '@angular/material/toolbar'; // para estilização do cabecalho/barra de ferramentas
import {MatExpansionModule} from '@angular/material/expansion'; // para estilização do cabecalho/barra de ferramentas
import { CabecalhoComponent } from './cabecalho/cabecalho.component'; //usando o comando ˜ng c cabecalho˜ ele cria automaticamente aqui!!!!

@NgModule({
  declarations: [
    AppComponent,
    ConversorBinarioComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //declarei manualmente
    BrowserAnimationsModule,
    MatInputModule, //declarei manualmente
    MatCardModule, //declarei manualmente
    MatButtonModule, //declarei manualmente
    MatToolbarModule, //declarei manualmente
    MatExpansionModule //declarei manualmente
    
  ],
  exports: [
    ConversorBinarioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})  

export class AppModule { 
  
}
