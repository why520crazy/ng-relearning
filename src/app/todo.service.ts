import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  id?: string;
  title: string;
  created_by?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  fetchTodos() {
    return this.http.get<Todo[]>(
      'https://62f70d4273b79d015352b5e5.mockapi.io/items'
    );
  }
}
