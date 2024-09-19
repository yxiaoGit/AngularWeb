
//@ts-nocheck
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DeatilsComponent } from './details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DeatilsComponent,CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eventEmitter';

  character = null;

  characters = [{ name: 'Frodo', weapon: 'Sting', race: 'Hobbit'},
                 { name: 'Tinker', weapon: 'Wand', race: 'Fairy'}
        
  ]

   selectCharacter(character) {
        this.character = character;
   }

   deleteCharacter(event) {
        var index = this.characters.indexOf(event);
        if (index > -1) {
           this.characters.splice(index, 1);
        }
        this.character = null;
   }
}
