import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContainerComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentDirective';

  images: any =[
    {
      src: "../assets/images/flower.jpeg",
      title: "Flower Cottonwood Tree",
      description: "A wonderful cottonwood tree"
    },
    {
      src: "../assets/images/arch.jpeg",
      title: "Arches",
      description: "Arches in building of church"
    }
  ]
}
