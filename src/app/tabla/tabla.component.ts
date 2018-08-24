import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  // tabla: any[];
  ahorros: number;
  acumulado: number;
  listaAcumulados = [];


  constructor() {
    // this.tabla = [];
    this.ahorros = 0;
    this.acumulado = 0;

  }
   ngOnInit() {
   }

   cargarTabla(pcantidad, psemanas)
   {
     this.ahorros = pcantidad;

     for(let i=1; i<= psemanas; i++)
     {
       this.acumulado += i * this.ahorros;
       this.listaAcumulados.push(this.acumulado);
     }
   }
  //  borrarTabla(){
  //   this.tabla = [1]
  // }


}


