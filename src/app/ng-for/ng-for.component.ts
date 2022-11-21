import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  items!: Todo[];

  constructor(private todoService: TodoService) {
    this.todoService.fetchTodos().subscribe((items) => {
      this.items = items;
    });
  }
}
