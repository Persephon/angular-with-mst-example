import { Injectable } from '@angular/core';
import { ITodoStore, SHOW_ALL, TodoStore } from './todos.store';
import makeInspectable from 'mobx-devtools-mst';

@Injectable({ providedIn: 'root' })
export class StoreService {
  todoStore: ITodoStore;

  constructor() {
    this.todoStore = TodoStore.create({ todos: [], filter: SHOW_ALL });
    makeInspectable(this.todoStore);
  }
}
