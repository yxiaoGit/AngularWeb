import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
        uppercase: {{"Brea" | uppercase }} <br>
       
        legend... {{wait | async}} {{dairy | async}}

         Date: {{ today | date:'yMMMMEEEEhmsz'}} <br>
        Number: {{ 3.141592789 | number: '2.1-5'}} <br>
        Currency: {{125.257 | currency:'USD':true: '1.2-2'}} <br>
        Currency: {{125.257 | currency}} <br>
        Percent: {{.8888 | percent: '2.2'}} <br>
        Json: {{jsonObject | json}} <br>
        Slice: {{"hello world" | slice:0:8}} <br>

     `
})
export class AppComponent {
  today= Date.now();
  title = 'builtinPipes';
  jsonObject = [{title: "mytitle"}, {title: "Programmer"}];
  wait = new Promise<string> ( (res, err) => {
      setTimeout( ()=> res("wait for it...'"), 1000);
  });

  dairy = new Promise<string> ( (res, err) => {
    setTimeout( ()=> res("dairy.'"), 2000);
});

}
