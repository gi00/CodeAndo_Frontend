import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PlansComponent } from './plans/plans.component';
import { WorkSpaceComponent } from './work-space/work-space.component';


const routes: Routes = [
 {path:"singin", component: SingInComponent},
 {path:"singup", component: SingUpComponent},
 {path:"", component: HomeComponent},
 {path:"profile", component: ProfileComponent},
 {path:"plans", component: PlansComponent},
 {path:"work-space", component: WorkSpaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
