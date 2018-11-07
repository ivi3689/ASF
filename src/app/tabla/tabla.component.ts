import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  tabla: any[];
  ahorros: number;
  acumulado: number;
  listaAcumulados = [];
  tiempoAcumulado: number;

 // estos son para la segunda tabla
  cantidadFinal: number;
  tiempo: number;
  periodo: number;
  minimoAhorro: number;
  listaMinimoAhorro = [];
  listaMinimoAhorroSum = []

  constructor() {
    this.tabla = [];
    this.ahorros = 0;
    this.acumulado = 0;
    this.tiempoAcumulado = 0;
    // estos son para la segunda tabla
    this.cantidadFinal = 0;
    this.tiempo = 0;
    this.periodo = 0;
    this.minimoAhorro = 0;

  }
   ngOnInit() {}

   cargarTabla(pcantidad, pTime)
   {
     this.ahorros = parseFloat(pcantidad);

     for(let i=1; i<= pTime; i++)
     {
       this.acumulado += i * this.ahorros;
       this.listaAcumulados.push(this.acumulado);
     }
   }
   borrarTabla($event){
    this.listaAcumulados = []
    this.acumulado = 0
  }
// estos son para la segunda tabla
  generarTabla(pCuantia, pTiempo)
  {
    this.listaMinimoAhorro = []
    this.cantidadFinal =parseFloat(pCuantia);
    this.periodo = parseFloat(pTiempo)
    console.log(this.cantidadFinal, this.periodo)

    for(let i = this.periodo; i>0; i--){
      let sum =  this.sumatorioArr(this.listaMinimoAhorro)
      let ahorroAnterior = (i===this.periodo) ? 0 : sum
      let ahorro = ((this.cantidadFinal - ahorroAnterior) / ((i+1)*i/2));
      this.listaMinimoAhorro.push(ahorro)
      this.listaMinimoAhorroSum.push(sum)
    }
    console.log(this.minimoAhorro)
    console.log(this.listaMinimoAhorro)

  }

   eliminarTabla($event)
   {
    this.listaMinimoAhorro = []
    this.cantidadFinal = 0;
    this.tiempo = 0;
    this.periodo = 0;
    this.minimoAhorro = 0;
   }

    sumatorioArr(arr)
    {
      let res = 0
      for(let i = 0; i<arr.length; i++){
        res += arr[i]
      }
      console.log(res)
      return res
    }

   arrayOne(n: number): any[]
   {
     console.log(Array(n))
    return Array(n);
   }

  calculoAhorro(semana){

    let cantidadAnterior = 0
    if(semana !== this.periodo){
      cantidadAnterior += this.calculoAhorro(semana+1)
    }
    return (this.cantidadFinal - cantidadAnterior)/((semana+1)*(semana/2))
  }


}


