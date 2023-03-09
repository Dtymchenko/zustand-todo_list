import "./App.css";
import React from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import { useTodos } from "./store";

function App() {
  const addOpen = useTodos((state) => state.addOpen);

  // const { addOpen, setAddOpen } = useTodos((state) => ({
  //   addOpen: state.addOpen,
  //   setAddOpen: state.setAddOpen,
  // }));

  // const closeForm = (e) => {
  //   e.stopPropagation();
  //   setAddOpen(false);
  // };

  return (
    <div
      className="App"
      //  onClick={closeForm}
    >
      <span>TESTING ZUSTAND STATE MANAGER ON TODO LIST</span>
      {addOpen && <Form />}
      <TodoList />
    </div>
  );
}

export default App;
