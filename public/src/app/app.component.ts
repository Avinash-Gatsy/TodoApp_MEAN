import { Component } from '@angular/core';
import {Todo} from './todo';
import { TodoService } from './todo.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}
  getTodos(): void {
    console.log('Adding todo data to view then to UI');
    this.todoService.getTodos().then(todos => this.todos = todos);
  }
  ngOnInit() {
    this.getTodos();
  }
}
