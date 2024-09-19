//@ts-nocheck
import { Component, OnInit, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-bad-guys',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './bad-guys.component.html',
    styleUrl: './bad-guys.component.css',

})

export class BadGuysComponent implements OnInit {

     @Input() sharedInput;
     characters: Array<any>;
     constructor() {}

     ngOnInit() {
        this.sharedInput.getCharacters().subscribe(
            characters => this.characters = characters);
        
     }

     hitCharacter(character, damage ) {
        this.sharedInput.hitCharacter(character, damage);
     }
}