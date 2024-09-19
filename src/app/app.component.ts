import { Component } from '@angular/core';
import { SharedService } from './shared.service';
import { GoodGuysComponent} from './good-guys.component';
import { BadGuysComponent} from './bad-guys.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GoodGuysComponent, BadGuysComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[SharedService]
})
export class AppComponent {
  title = 'sharedService';

  constructor( public shared: SharedService) {}
}
