import { create } from "zustand";
import { nanoid } from "nanoid";

export const useTodos = create((set) => ({
  todos: [],
  addOpen: true,
  addTodo: (title) =>
    set((state) => {
      if (title.trim()) {
        const newTodo = { id: nanoid(), title, completed: false };
        return { todos: [...state.todos, newTodo] };
      }
      return state.todos;
    }),
  removeTodo: (id) => {},
  setAddOpen: (bool) => set((state) => (state.addOpen = bool)),
}));
