import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userSingUp } from 'src/models/code.model';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
 user: userSingUp ={
  nombre: "",
  email: "",
  contrasena: "",
  edad: ""
 }

 constructor(private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async guardarUsuario() {
    console.log(this.user)
    let respuesta = await fetch('http://localhost:5200/api/singin', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.user)
    });

    let respuestaJson = await respuesta.json();
    if(respuestaJson.codigoResultado ==1){
      this.router.navigate(['/singin']);

    }
    
    
  }
}
