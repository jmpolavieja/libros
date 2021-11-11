import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SaludoComponent} from "./saludo/saludo.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import { AppRoutingModule } from './app-routing.module';
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
