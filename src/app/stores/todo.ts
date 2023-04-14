import { Instance, types } from "mobx-state-tree";

export const Todo = types
    .model({
        text: types.string,
        completed: types.boolean,
        id: types.identifierNumber
    })
    .actions(self => ({
        edit(text: string) {
            self.text = text;
        },
        complete() {
            self.completed = !self.completed;
        }
    }));

export type ITodo = Instance<typeof Todo>;