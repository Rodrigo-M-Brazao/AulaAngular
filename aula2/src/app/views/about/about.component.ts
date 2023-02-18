import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  nome = 'Rodrigo Milani Brazão';
  curso = 'Tecnologia em Sistemas para internet';
  semestre = '3º Semestre';
  aula = 'Aplicações Interativas e Design Responsivo';
  api = 'Angular'
}
