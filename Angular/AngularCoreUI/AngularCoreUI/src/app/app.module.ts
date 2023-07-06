import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UrlShortenComponent } from './url-shorten/url-shorten.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';
import { TemperatureComponent } from './temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlShortenComponent,
    MortgageCalculatorComponent,
    TemperatureComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
