import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5-novo',
  templateUrl: './ex5-novo.component.html',
  styleUrls: ['./ex5-novo.component.css']
})
export class Ex5NovoComponent {
  caminhoImg = '';
  resposta = false;

  acertou(){
    this.resposta = true;
    this.caminhoImg = 'assets/certo.png'
  }

  errou(){
    this.resposta = false;
    this.caminhoImg = 'assets/errado.png'
  }

  reset(){
    this.caminhoImg = '';
  }
}
