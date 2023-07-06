import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './User/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './User/home/home.component';
import {HttpClientModule } from '@angular/common/http';
import { BookingformComponent } from './User/bookingform/bookingform.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminNavbarComponent } from './Admin/admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { LandrideComponent } from './User/landride/landride.component';
import { WaterrideComponent } from './User/waterride/waterride.component';
import { AdminWaterRideComponent } from './Admin/admin-water-ride/admin-water-ride.component';
import { AdminLandRideComponent } from './Admin/admin-land-ride/admin-land-ride.component';
import { AddlandRideComponent } from './Admin/addland-ride/addland-ride.component';
import { UpdateLandRideComponent } from './Admin/update-land-ride/update-land-ride.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
    BookingformComponent,
    AdminLoginComponent,
    AdminNavbarComponent,
    AdminHomeComponent,
    LandrideComponent,
    WaterrideComponent,
    AdminWaterRideComponent,
    AdminLandRideComponent,
    AddlandRideComponent,
    UpdateLandRideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
