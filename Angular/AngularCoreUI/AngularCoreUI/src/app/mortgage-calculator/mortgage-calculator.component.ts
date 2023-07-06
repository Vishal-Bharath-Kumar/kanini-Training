import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent {

  loanAmt = new FormGroup({
    purchaseAmt:new FormControl(''),
    downAmt:new FormControl(''),
    intRate:new FormControl(''),
    timeMon:new FormControl('')
  })
  intPer!:any
  intPerAmt!:any
  calculate()
  {
    const totalAmt:any=this.loanAmt.value.purchaseAmt
    const dAmt:any=this.loanAmt.value.downAmt
    const time:any=this.loanAmt.value.timeMon
    const rate:any=this.loanAmt.value.intRate

    const princAmt=totalAmt-dAmt
    const intAmt=(princAmt*time*rate)/100
    this.intPer=intAmt+princAmt
    this.intPerAmt=this.intPer/12
  }
}
