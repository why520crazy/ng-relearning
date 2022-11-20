import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-relearning';
}
