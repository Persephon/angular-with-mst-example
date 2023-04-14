import { types, Instance } from 'mobx-state-tree';
import { Todo, ITodo } from './todo';
import { TimeTraveller } from 'mst-middlewares';

export const SHOW_ALL = 'show_all';
export const SHOW_COMPLETED = 'show_completed';
export const SHOW_ACTIVE = 'show_active';

const filterType = types.union(
  ...[SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE].map(types.literal)
);

export const TodoStore = types
  .model({
    todos: types.array(Todo),
    filter: types.optional(filterType, SHOW_ALL),
    history: types.optional(TimeTraveller, { targetPath: '../todos' }),
  })
  .views((self) => ({
    get completedCount() {
      return self.todos.reduce(
        (count, todo) => (todo.completed ? count + 1 : count),
        0
      );
    },
    get activeCount() {
      return self.todos.reduce(
        (count, todo) => (!todo.completed ? count + 1 : count),
        0
      );
    },
    get filteredTodos() {
      return self.filter !== SHOW_ALL
        ? self.todos.filter((todo: ITodo) => {
            if (self.filter === SHOW_ACTIVE) {
              return !todo.completed;
            }
            return todo.completed;
          })
        : self.todos;
    },
  }))
  .actions((self) => ({
    addTodo(text: string) {
      self.todos.push(<ITodo>{
        id: self.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text,
      });
    },
    removeTodo(todo: ITodo) {
      self.todos.remove(todo);
    },
    showAll() {
      self.filter = SHOW_ALL;
    },
    showActive() {
      self.filter = SHOW_ACTIVE;
    },
    showCompleted() {
      self.filter = SHOW_COMPLETED;
    },
  }));

export type ITodoStore = Instance<typeof TodoStore>;
