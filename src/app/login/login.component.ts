import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    login : FormGroup
  constructor() { }

  ngOnInit() {
    this.login = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/)
    ]),
      username: new FormControl('', Validators.required)
    })
  }
  entrarPerfil(){
    console.log(this.login.value)}
}
