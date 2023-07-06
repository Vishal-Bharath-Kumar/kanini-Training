import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './User/navbar/navbar.component';
import { HomeComponent } from './User/home/home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { BookingformComponent } from './User/bookingform/bookingform.component';
import { AdminNavbarComponent } from './Admin/admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminLandRideComponent } from './Admin/admin-land-ride/admin-land-ride.component';
import { LandrideComponent } from './User/landride/landride.component';
import { WaterrideComponent } from './User/waterride/waterride.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'signup',component:RegisterComponent},
{path:'home',component:HomeComponent},
{path:'admin',component:AdminLoginComponent},
{path:'book',component:BookingformComponent},
{path:'adminhome',component:AdminHomeComponent},
{path:'adminnav',component:AdminNavbarComponent},
{path:'adminland',component:AdminLandRideComponent},
{path:'land',component:LandrideComponent},
{path:'water',component:WaterrideComponent}




// {path:'signup/home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
