import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  pokemon : string = '';
  escolhaPokemon(mensagem: string){

    this.pokemon = mensagem;
  }
}
