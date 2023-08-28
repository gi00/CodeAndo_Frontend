import { Component, OnInit } from '@angular/core';
import { userLogin } from 'src/models/code.model';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  user: userLogin = {
    _id: "",
    email: "",
    contrasena: "",
    imagen: "",
    nombre: ""
  }
  constructor( 
    private localStorageService: LocalStorageService,
    private router: Router,){
  }
  ngOnInit(): void {
    const storeUser = this.localStorageService.getItem('usuario')
    console.log("nadavar",storeUser );
    if (storeUser) {
      this.user = storeUser.usuario;
    }
    console.log("nadvar2", this.user)
   
  }

  cerrarSesion() {
    this.localStorageService.logout();
    this.router.navigate(['/']);
    
  }

}
