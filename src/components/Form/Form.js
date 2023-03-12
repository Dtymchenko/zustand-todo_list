import React from "react";
import styles from "./Form.module.scss";
import { useTodos } from "./../../store";

const Form = () => {
  const [inputValue, setInputValue] = React.useState("");
  const { addTodo, setAddOpen } = useTodos((state) => ({
    addTodo: state.addTodo,
    setAddOpen: state.setAddOpen,
  }));

  const formRef = React.useRef();

  React.useEffect(() => {
    const handler = (e) => {
      if (!formRef.current.contains(e.target)) {
        setAddOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
    setAddOpen(false);
  };

  return (
    <div ref={formRef} className={styles.wrapper}>
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
