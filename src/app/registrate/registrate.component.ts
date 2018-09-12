import { Component, OnInit } from '@angular/core';
// import {RegistrateService} from './../registrate.service';
 import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit {

   formulario: FormGroup

  // constructor(private registrateService: RegistrateService) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      telefono: new FormControl('',[
        Validators.required,
        Validators.pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/)
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d).{4,8}$/)
        // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}[^'\s]/)
    ]),
      username: new FormControl('', Validators.required)
    })
  }

   crearPerfil(){
    console.log(this.formulario.value)}

}
