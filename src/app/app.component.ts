import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class AppComponent {
  title = 'Hello Angular Relearning!';

  constructor() {}
}
