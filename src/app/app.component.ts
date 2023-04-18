import { Component } from '@angular/core';
import { ITodoStore, TodoStore, SHOW_ALL } from './stores/todos.store';
import { ITodo } from './stores/todo';
import { StoreService } from './stores/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  todoStore : ITodoStore;

  constructor(storeService: StoreService) {
    this.todoStore = storeService.todoStore;
  }

  addTodo(){
    this.todoStore.addTodo(this.title);
    this.title = '';    
  }

  trackTodoById(index:number, todo: ITodo){
    return todo.id;
  }
}