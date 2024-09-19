//@ts-nocheck
import { Component, OnInit, Input  } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  
} from '@angular/animations';

@Component({
    selector: 'animated',
    templateUrl: './animated.component.html',
    styleUrl: './animated.component.css',
    animations: [
        trigger('fadeState', [
            state('inactive', style({
                transform: 'scale(.5) translateY(-50%)',
                opacity: 0
            })),
            state('active', style({
                transform: 'scale(1) translateY(0)',
                opacity: 1
            })),
            transition('inactive => active', 
                        animate('500ms ease-out')),
            transition('active => inactive', 
                        animate('500ms ease-out')),           
            
            
        ]),  //trigger 1

        trigger('bounceState', [
            transition('void => *', [
                animate(600, keyframes([
                    style({ opacity: 0,
                          transform: 'translateY(-50px)' }),
                    style({ opacity: .5,
                            transform: 'translateY(50px)' }),
                    style({ opacity: 1,
                            transform: 'translateY(0)' }),
                ]))
            ])
        ])

    ]
})

export class AnimatedComponent implements OnInit {
     @Input('src') src: string;
     @Input('title') title: string;
     state: string = 'inactive';
     constructor() {
       
     }
     ngOnInit() { }
     enter() {
        this.state = 'active';
     }
     leave() {
        this.state = 'inactive';
     }

}