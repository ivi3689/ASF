import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { MetodosComponent } from './metodos/metodos.component';
import { RetosComponent } from './retos/retos.component';

import {appRoutes} from  './app.routing';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { TablaComponent } from './tabla/tabla.component';






@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    LoginComponent,
    RegistrateComponent,
    HomeComponent,
    MetodosComponent,
    RetosComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
