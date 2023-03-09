import React from "react";
import styles from "./Form.module.scss";
import { useTodos } from "./../../store";

const Form = () => {
  const [inputValue, setInputValue] = React.useState("");
  const addTodo = useTodos((state) => state.addTodo);
  const setAddOpen = useTodos((state) => state.setAddOpen);
  const addOpen = useTodos((state) => state.addOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
    setAddOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          placeholder="Enter ToDo"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Add ToDo</button>
      </form>
    </div>
  );
};

export default Form;
