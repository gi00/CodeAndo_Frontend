import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { userLogin } from 'src/models/code.model';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  user: userLogin = {
    email: "",
    contrasena: ""
  }
  formularioRegistro = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    contrasena:new FormControl('',[Validators.required]),
  });



  constructor( private httpCliente: HttpClient, 
    private router: Router,
    private localStorageService: LocalStorageService
    ){

  }
  ngOnInit(): void {

  }


  //metodo para ceder al email
  get email(){
    return this.formularioRegistro.get('email');
  }

  async login(){
    console.log(this.formularioRegistro.value);
    console.log("Formulario Válido:", this.formularioRegistro.valid)

    //console.log(this.user)
    let respuesta = await fetch('http://localhost:5200/api/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.user)
    });

    let respuestaJson = await respuesta.json();
    if(respuestaJson.codigoResultado ==1){
      this.localStorageService.setItem('usuario',respuestaJson);
      console.log("Usuario", respuestaJson);
      this.router.navigate(['/profile']);

    }
  }
}
