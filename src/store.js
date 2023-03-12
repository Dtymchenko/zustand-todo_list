import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

export const useTodos = create(
  persist(
    (set) => ({
      todos: [],
      addOpen: false,
      error: null,
      formRef: null,
      addTodo: (title) =>
        set((state) => {
          if (title.trim()) {
            const newTodo = { id: nanoid(), title, completed: false };
            return { todos: [...state.todos, newTodo] };
          }
          return state.todos;
        }),
      removeTodo: (id) =>
        set((state) => ({
          ...state,
          todos: state.todos.filter((item) => item.id !== id),
        })),
      clear: () => set({ todos: [] }),
      //   setAddOpen: (bool) =>
      //     set((state) => ({
      //       ...state,
      //       addOpen: bool,
      //     })), - WE CAN DO THIS WAY ALSO!
      setAddOpen: (bool) => set({ addOpen: bool }),
      setFormRef: (str) => set({ formRef: str }),
      fetchTodos: async () => {
        try {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
          );
          if (!res.ok) throw new Error("Failed to fetch!");
          set({ todos: await res.json(), error: null });
        } catch (error) {
          set({ error: error.message });
        }
      },
    }),
    { name: "todo-storage" }
  )
);

// export const useBearStore = create(
//   persist(
//     (set, get) => ({
//       bears: 0,
//       addABear: () => set({ bears: get().bears + 1 }),
//     }),
//     {
//       name: "food-storage", // name of the item in the storage (must be unique)
//       storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//     }
//   )
// );
