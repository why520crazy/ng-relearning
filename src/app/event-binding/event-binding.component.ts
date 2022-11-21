import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  relearned = false;

  startRelearn() {
    this.relearned = true;
  }
}
