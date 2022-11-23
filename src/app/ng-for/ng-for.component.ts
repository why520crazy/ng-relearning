import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {

  todoService = inject(TodoService);

  constructor() {}

  ngOnInit(): void {
    this.todoService.fetchTodos().subscribe();
  }
}
