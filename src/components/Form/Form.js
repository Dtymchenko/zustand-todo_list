import React from "react";
import styles from "./Form.module.scss";
import { nanoid } from "nanoid";
import { useTodos } from "./../../store";

const Form = () => {
  const [inputValue, setInputValue] = React.useState("");
  const addTodo = useTodos((state) => state.addTodo);
  const setAddOpen = useTodos((state) => state.setAddOpen);

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
