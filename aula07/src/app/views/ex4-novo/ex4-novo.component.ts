import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4-novo',
  templateUrl: './ex4-novo.component.html',
  styleUrls: ['./ex4-novo.component.css']
})
export class Ex4NovoComponent {
  nome = '';
  usuario = '';
  aplicativo = '';
  apertou = false;
  apertaBtn(){
    this.apertou = true;
  }
}
