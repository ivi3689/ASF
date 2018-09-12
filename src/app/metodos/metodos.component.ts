import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.css']
})
export class MetodosComponent implements OnInit {
  //para el metodo de la edad
  consTiempo: number;
  edad: number;
  porcentaje: number;
  listaAhorros = [];
  listaAnios = [];
  ingresos: number;
  resultado: 0;
  //para el metodo de porcentaje
  constFija: number;
  constPersonal: number;
  constAhorro: number;
  cantidad: number;



  constructor( router: Router)
  {
    //inicializacion  de las variables del metodo de la edad
    this.consTiempo = 20;
    this.edad = 0;
    this.porcentaje = 0;
    this.ingresos = 0;
    this.resultado = 0;
    //inicializacion  de las variables del metodo de porcentaje
    this.cantidad = 0;
    this.constFija = 50;
    this.constPersonal = 30;
    this.constAhorro = 20;
    //son los anclas a otras partes concreta de este componente
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        console.log(tree)
        if (tree.fragment) {
          console.log(tree.fragment)
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });


  }
   ngOnInit() {
   }
  //formula del metodo de porcentaje
   porcentajeTabla(pCantidad)
   {
      this.cantidad = parseFloat(pCantidad);
   }
    //formulas  del metodo de la edad
   cargarTabla(pEdad,pTiempo,pIngresos)
   {
     this.edad = parseFloat(pEdad);
     this.porcentaje = this.edad-this.consTiempo;
     this.ingresos = parseFloat(pIngresos);

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
      this.resultado = 0;
    }


}
