//@ts-nocheck

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { DragItemComponent } from './drag-item/drag.component';
import { DropItemComponent } from './drop-item/drop.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DragItemComponent,DropItemComponent,CommonModule,FormsModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dragDropable';

  tagList: string[];
  constructor() {
    this.tagList = [
      'Nature',
      'Landscape',
      'Flora',
      'Inspiring',
      'Summer',
      'Fun',
      
    ]
  }

  ngOnInit() {
  }


}
