import { Component, input, output } from '@angular/core';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo=input.required<Todo>();
  todoToggle=output<Todo>();
  todoClicked(){
    this.todoToggle.emit(this.todo());
  }
}
