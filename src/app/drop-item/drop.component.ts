//@ts-nocheck

import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule,FormsModule],
  selector: 'drop-item',
  templateUrl: './drop.component.html',
  styleUrl: './drop.component.css'
})
export class DropItemComponent implements OnInit {
  @Input() imgsrc: string;
  tags: string[];
  constructor() {
    this.tags = [];
  }
  ngOnInit() { }      
  
  allowDrop(event) {
    event.preventDefault();
  }

  onDrop(event) {
    event.preventDefault();

    let data = JSON.parse(event.dataTransfer.getData('tagData'));
    if (!this.tags.includes(data.tag)) {
      this.tags.push(data.tag);
    }
  }
}
