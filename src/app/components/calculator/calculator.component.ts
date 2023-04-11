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
    if (this.answer != '') {
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
    if (this.displayNumber.length > 1) {
      this.displayNumber = this.displayNumber.substring(0, this.displayNumber.length - 1);
    } else {
      this.displayNumber = '0';
    }
  }

  evaluate() {
    this.displayCalculation += this.displayNumber;
    if (this.displayCalculation.includes('0') && this.displayCalculation.includes('/')) {
      alert("No se peden realizar divisiones con 0 en su dividendo o su divisor");
      this.clear();
    } else {
      this.answer = eval(this.displayCalculation);
      this.displayNumber = '0';
    }
  }
}
