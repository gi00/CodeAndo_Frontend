import { Component, OnInit } from '@angular/core';
import { userLogin } from 'src/models/code.model';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.css']
})
export class NavbarLateralComponent implements OnInit {

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
    console.log("nadavarlateral",storeUser );
    if (storeUser) {
      this.user = storeUser.usuario;
    }
    console.log("nadvarlateral", this.user)
   
  }

}
