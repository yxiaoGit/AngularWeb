//@ts-nocheck
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DeatilsComponent {
   @Input("character") character: any;
   @Output("characterDeleted") characterDeleted = new EventEmitter<any>();

   deleteChar() {
      this.characterDeleted.emit(this.character);
   }

}