import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { censorPipe } from './custom.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [censorPipe, CommonModule, RouterOutlet],

  template: ` 
     {{phrase | censor: "*****"}}
  `
})
export class AppComponent {
  title = 'customPipe';

  phrase:string="This bad phrase is terrible ";
}
