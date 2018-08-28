import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.css']
})
export class MetodosComponent implements OnInit {
  consTiempo: number;
  edad: number;
  porcentaje: number;
  listaAhorros = [];
  listaAnios = [];
  ingresos: number


  constructor()
  {
    this.consTiempo = 20;
    this.edad = 0;
    this.porcentaje = 0;
    this.ingresos = 0;

  }
   ngOnInit() {}

   cargarTabla(pEdad,pTiempo,pIngresos)
   {
     this.edad = parseInt(pEdad);
     this.porcentaje = this.edad-this.consTiempo;
     this.ingresos = parseInt(pIngresos);

     console.log(typeof(this.porcentaje))

      for (let i=1; i<=pTiempo; i++) {
        this.listaAnios.push(i);
      }
   }

     borrarTabla($event){
      this.listaAhorros = [0]
      this.listaAnios=[0]
      this.edad = 0;
      this.porcentaje = 0;
      this.ingresos = 0;
    }

}
