import { Component, Input } from '@angular/core';
import { StoreService } from 'src/app/stores/store.service';
import { ITodo } from 'src/app/stores/todo';
import { ITodoStore } from 'src/app/stores/todos.store';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  store: ITodoStore;

  constructor(storeService: StoreService) {
    this.store = storeService.todoStore;
  }

  trackTodoById(index:number, todo: ITodo){
    return todo.id;
  }

  removeTodo(todo: ITodo) {
    this.store.removeTodo(todo);
  }
}
