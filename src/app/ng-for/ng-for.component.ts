import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  id?: string;
  title: string;
  created_by?: string;
}

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  todos!: Todo[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Todo[]>('https://62f70d4273b79d015352b5e5.mockapi.io/items')
      .subscribe((items) => {
        this.todos = items;
      });
  }
}
