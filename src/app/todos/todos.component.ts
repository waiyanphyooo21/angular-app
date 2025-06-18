// import { Component, OnInit } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import {TodoService} from '../services/todos.service';

// @Component({
//   selector: 'app-todos',
//   imports: [],
//   templateUrl: './todos.component.html',
//   styleUrl: './todos.component.scss'
// })
// export class TodosComponent implements OnInit{
//   todoService = inject(TodosService);
//   todoItems = signal<Array<Todo>>([]);

//   searchTerm = signal('');
  
//   ngOnInit(): void {
//       console.log(this.todoService.todoItems);
//       this.todoItems.set(this.todoService.todoItems);
//   }
// }

import { Component, OnInit, inject, signal } from '@angular/core';
import { TodoServiceService } from '../services/todo.service.service';
import { Todo } from '../model/todo.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoServiceService);
  todoItems = signal<Array<Todo>>([]);

  searchTerm = signal('');

  ngOnInit(): void {
    const todos = this.todoService.getTodos();
    this.todoItems.set(todos);
  }
}
