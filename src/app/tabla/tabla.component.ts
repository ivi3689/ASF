import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  tabla: any []

  constructor() {
    this.tabla = []
  }

  ngOnInit() {
  }
  aumentarTabla(){

    if(this.tabla.length<3){
      this.tabla.push('fila')
    }

  }
  nuevaTabla(){
    this.tabla = [1]
  }

}

