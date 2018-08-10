import { Routes } from '@angular/router';
import {CabeceraComponent} from './cabecera/cabecera.component';
import {PieComponent} from './pie/pie.component';
import {LoginComponent} from './login/login.component';
//import {Component} from '';
//import {Component} from '';

export const appRoutes: Routes = [
{path: '', redirectTo: '', pathMatch: 'full'},
{path: 'login', component:LoginComponent},
//{path: '', component: Component},
//{path: '', component: Component},
//{path: '**', component: Component}
]
