import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkSpaceComponent } from './work-space/work-space.component';
import { PlansComponent } from './plans/plans.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Navbar1Component } from './navbar1/navbar1.component';
import { NavbarLateralComponent } from './navbar-lateral/navbar-lateral.component';
import { ProyectsListComponent } from './proyects-list/proyects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    NavbarComponent,
    SingUpComponent,
    HomeComponent,
    WorkSpaceComponent,
    PlansComponent,
    ProfileComponent,
    Navbar1Component,
    NavbarLateralComponent,
    ProyectsListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
