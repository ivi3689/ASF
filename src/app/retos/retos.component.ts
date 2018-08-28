import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'retos',
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.css']
})
export class RetosComponent implements OnInit {


  constFija: number;
  constPersonal: number;
  constAhorro: number

  porcentaje: number;
  // listaAhorros = [];
  // listaAnios = [];
  ingresos: number


  constructor()
  {
    this.constFija = 50;
    this.constPersonal = 30;
    this.constAhorro = 20;

    this.porcentaje = 0;
    this.ingresos = 0;

  }
   ngOnInit() {}

   cargarTabla(pIngresos)
   {
      this.ingresos = parseFloat(pIngresos);
   }

    //  borrarTabla($event){
    //   this.listaAhorros = [0]
    //   this.listaAnios=[0]

    //   this.porcentaje = 0;
    //   this.ingresos = 0;
    // }


}
