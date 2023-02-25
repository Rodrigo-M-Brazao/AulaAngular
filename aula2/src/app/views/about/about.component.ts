import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Propriedades (-variáveos globais)
  nome = 'Rodrigo';
  sobrenome = 'Milani Brazão';
  curso = 'Tecnologia em Sistemas para internet';
  semestre = 3;
  aula = 'Aplicações Interativas e Design Responsivo';
  api = 'Angular';
  imagem = 'assets/19872714.jpg'


  somar(valor1: number, valor2: number){
    return valor1+valor2
  }
}

