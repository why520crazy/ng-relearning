import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  relearned = false;

  startRelearn() {
    this.relearned = true;
  }
}
