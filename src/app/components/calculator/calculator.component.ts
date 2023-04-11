import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  displayNumber: any = '0';
  displayCalculation: any = '';
  answer = '';

  constructor() { }

  ngOnInit(): void {
  }

  clickNumberBtn(num: any) {
    if(this.answer != ''){
      this.clear();
    }
    if ((this.displayNumber == 0 || this.displayNumber == '0') && (num != '+' && num != '-' && num != '*' && num != '/')) {
      this.displayNumber = num;
    } else {
      if (num === '+' || num === '-' || num === '*' || num === '/') {
        this.displayCalculation += this.displayNumber + num;
        this.displayNumber = '0';
      } else {
        this.displayNumber += num
      }
    }
  }

  clear() {
    this.displayNumber = '0';
    this.displayCalculation = '';
    this.answer = '';
  }

  deleteByOne() {
    if(this.displayNumber.length > 1){
      this.displayNumber = this.displayNumber.substring(0,this.displayNumber.length - 1);
    } else {
      this.displayNumber = '0';
    }
  }

  evaluate() {
    this.displayCalculation += this.displayNumber;
    this.answer = eval(this.displayCalculation);
    console.log(this.answer);
    this.displayNumber = '0';
  }

  ////
  // displayValue = '';


  // handleInput(value: string) {
  //   if (value === '+' || value === '-' || value === '*' || value === '/') {
  //     this.calculation += this.displayValue + value;
  //     this.displayValue = '';
  //   } else {
  //     this.displayValue += value;
  //   }
  // }

  // calculate() {
  //   this.calculation += this.displayValue;
  //   this.displayValue = eval(this.calculation);
  //   this.calculation = '';
  // }

}
