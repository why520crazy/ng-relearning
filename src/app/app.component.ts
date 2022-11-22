import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule, MatTabsModule],
})
export class AppComponent {
  title = 'Hello Angular Relearning!';

  current = '';

  links = [
    {
      link: 'ng-if',
      text: 'NgIf',
    },
    {
      link: 'event-binding',
      text: 'EventBinding',
    },
    {
      link: 'ng-for',
      text: 'NgFor',
    },
    {
      link: 'forms',
      text: 'Forms',
    },
  ];

  activeLink = '';

  constructor() {}
}
