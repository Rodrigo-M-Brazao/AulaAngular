import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  grita(value: string){
    return value.toUpperCase();
  }
}
