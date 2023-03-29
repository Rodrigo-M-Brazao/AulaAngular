import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component {
  valor1: number = 0;
  valor2: number = 0;
  valorTotal: number = 0;
  soma(){
    this.valorTotal = this.valor1 + this.valor2
  }
  subtracao(){
    this.valorTotal = this.valor1 - this.valor2
  }
  multiplicacao(){
    this.valorTotal = this.valor1 * this.valor2
  }
  divisao(){
    this.valorTotal = this.valor1 / this.valor2
  }
}
