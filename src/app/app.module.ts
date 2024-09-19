import {NgModule} from '@angular/core';
import { AnimatedComponent } from './animated/animated.component';

import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [CommonModule],
declarations: [ AnimatedComponent ],
exports: [AnimatedComponent, CommonModule, FormsModule]
})


export class AnimatedModule { }