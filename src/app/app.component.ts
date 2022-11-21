import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  // imports: [
  //   CommonModule,
  // ],
})
export class AppComponent {
  relearned = false;

  constructor() {
    setTimeout(() => {
      this.relearned = true;
    }, 2000);
  }
}
