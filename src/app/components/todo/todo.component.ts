import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from 'src/app/stores/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input()
  todo: ITodo | undefined;

  @Output()
  removeTodo= new EventEmitter<ITodo>();
}
