import { Component } from '@angular/core';
import { ITodoStore, TodoStore, SHOW_ALL } from './stores/todos.store';
import { ITodo } from './stores/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  todoStore : ITodoStore;

  constructor() {
    this.todoStore = TodoStore.create({ todos:[], filter:SHOW_ALL });
  }

  addTodo(){
    this.todoStore.addTodo(this.title);
    this.title = '';    
  }

  trackTodoById(index:number, todo: ITodo){
    return todo.id;
  }
}