import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss'],
})
export class NgIfComponent {
  relearned = false;

  constructor() {
    setTimeout(() => {
      this.relearned = true;
    }, 2000);
  }
}
