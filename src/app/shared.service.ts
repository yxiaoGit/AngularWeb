//@ts-nocheck

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


export class Character {
    name: string;
    race: string;
    alignment: string;
    health: number;
}

@Injectable()
export class SharedService {
    characters: Character[] = [
       {
        name: 'Aragon',
        race: 'human',
        alignment: 'good',
        health: 100

       },
       {
        name: 'Kiwi',
        race: 'elf',
        alignment: 'good',
        health: 100
       },
       {
        name: 'Legola',
        race: 'wizard',
        alignment: 'bad',
        health: 100
       }

    ];


    charObservble: Observable<Character[]> ;
    observer;

    constructor() {
        this.charObservble = new Observable(observer => {
            this.observer = observer;
            this.observer.next(this.characters);
        })
    }

    getCharacters(): Observable<Character[]> {
      return this.charObservble;
    }

    hitCharacter(character, damage) {
        var index = this.characters.indexOf(character, 0);
        if(index > -1) {
            this.characters[index].health -= damage;
            if (this.characters[index].health <= 0) {
                this.characters.splice(index,1);
            }
        }
        this.observer.next(this.characters);
    }


}