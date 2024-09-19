// @ts-nocheck


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { RandomImageService } from './random-image.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [RandomImageService]

})
export class AppComponent {
  title = 'imagesApp';
  randomImageObsble: Observable<any> ;
  imageInfo: any;
  imageHistory: any[];
  constructor(
     private randomImageSrvice: RandomImageService
  ) {
    this.imageInfo = {
          url: '',
          title: 'Loading ...',
          width: 400
    };
    this.imageHistory = [];
  }

  ngOnInit() {
       this.randomImageObsble = this.randomImageSrvice.getRandomImage();
       this.randomImageObsble.subscribe(
           imageData => {
            if(this.imageHistory.length == 10) {
              this.imageHistory.splice(0,this.imageHistory.length);
            }
              this.imageInfo = imageData;
              this.imageHistory.push(imageData);
             
           }
       )
  }

  

}
