import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConversorBinarioComponent } from './conversorBinario/conversorBinario.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversorBinarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
