import { Component } from '@angular/core';
import { PromiseService } from './promise.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule],

  providers: [PromiseService]
})
export class AppComponent {
  title = 'alertTimer';

  seconds: number = 0;

  constructor(
      private alerter: PromiseService
  ) {}

  public createAlert() {
      this.alerter.createTimedAlert(this.seconds);
  }
}
