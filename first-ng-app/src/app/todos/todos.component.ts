// import { Component, OnInit, inject, signal } from '@angular/core';

// import { Todo } from '../model/todo.type';
// import { CommonModule } from '@angular/common';
// import { catchError } from 'rxjs';
// import { TodosService } from '../services/todos.service';

// @Component({
//   selector: 'app-todos',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './todos.component.html',
//   styleUrl: './todos.component.scss'
// })
// export class TodosComponent implements OnInit {
//   todoService = inject(TodosService);
//   todoItems = signal<Array<Todo>>([]);

//   searchTerm = signal('');

//   ngOnInit(): void {
//     // const todos = this.todoService.getTodos();
//     // this.todoItems.set(todos);

//     this.todoService.getTodosFormAPI().pipe(
//       catchError((error) => {
//         console.log(error);
//         throw error;
//       })
//     ).subscribe((todos)=>{
//       this.todoItems.set(todos);
//     })
//   }
// }

import { Component, OnInit, inject, signal } from '@angular/core';
import { Todo } from '../model/todo.type';
import { CommonModule } from '@angular/common';
import { TodosService } from '../services/todos.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FilterTodosPipe } from "../pipes/filter-todos.pipe";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']  
})
export class TodosComponent implements OnInit {

  todoService = inject(TodosService);
  todoItems = signal<Todo[]>([]);
  loading = signal(true);
  searchTerm = '';  

  ngOnInit(): void {
    this.loading.set(true);

    this.todoService.getTodosFormAPI().subscribe(todos => {
      setTimeout(() => {
        this.todoItems.set(todos);
        this.loading.set(false);
      }, 500);
    }, error => {
      console.error(error);
      this.loading.set(false);
    });
  }

  updateToDoItems(todoItem: Todo) {
    this.todoItems.update(todos => {
      return todos.map(todo => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}

