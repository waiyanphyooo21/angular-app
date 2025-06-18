import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }

  todoItems: Array<Todo> = [
    {
      title: 'groceries',
      id: 0,
      userId: 1,
      completed: false,
    },{
      title: 'car wash',
      id: 1,
      userId: 1,
      completed: false,
    }
  ];

  // Get all todos
  getTodos(): Todo[] {
    return this.todoItems;
  }

  // Add new todo
  addTodo(todo: Todo): void {
    this.todoItems.push(todo);
  }

  // Update todo
  updateTodo(id: number, updatedTodo: Todo): void {
    const index = this.todoItems.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todoItems[index] = updatedTodo;
    }
  }

  // Delete todo
  deleteTodo(id: number): void {
    this.todoItems = this.todoItems.filter(todo => todo.id !== id);
  }

  // Toggle todo completion
  toggleTodo(id: number): void {
    const todo = this.todoItems.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
