//@ts-nocheck

import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
@Component({
  standalone: true,
  imports: [CommonModule,FormsModule],

  selector: 'drag-item',
  templateUrl: './drag.component.html',
  styleUrl: './drag.component.css'
})
export class DragItemComponent implements OnInit {
  title = 'dragDropable';
  @Input() tag: string;
  constructor() {}
  ngOnInit() {
      
  }

  onDrag(event) {
    event.dataTransfer.setData('tagData', JSON.stringify({tag: this.tag}));
  }
}
