import { Routes } from '@angular/router';
import {CabeceraComponent} from './cabecera/cabecera.component';
import {PieComponent} from './pie/pie.component';
import {LoginComponent} from './login/login.component';
import {RegistrateComponent} from './registrate/registrate.component';
import {HomeComponent} from './home/home.component';
import {MetodosComponent} from './metodos/metodos.component';
import {RetosComponent} from './retos/retos.component';
import {TablaComponent} from './tabla/tabla.component';
import {PerfilComponent} from './perfil/perfil.component';


export const appRoutes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'login', component:LoginComponent},
{path: 'registrate', component: RegistrateComponent},
{path: 'home', component: HomeComponent},
{path: 'metodos', component: MetodosComponent},
{path: 'retos', component: RetosComponent},
{path: 'tabla', component: TablaComponent},
{path: 'perfil', component: PerfilComponent},
{path: 'contacto', component: PieComponent},

{path: '**', redirectTo: 'home'}
]
