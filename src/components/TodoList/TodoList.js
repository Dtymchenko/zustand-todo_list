import React from "react";
import styles from "./TodoList.module.scss";
import ListItem from "./../ListItem/ListItem";
import { useTodos } from "./../../store";

const TodoList = () => {
  const todos = useTodos((state) => state.todos);
  const addOpen = useTodos((state) => state.addOpen);
  const setAddOpen = useTodos((state) => state.setAddOpen);

  const onClickPlus = (e) => {
    setAddOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={!addOpen ? `${styles.list}` : `${styles.list_blur}`}>
        {todos?.map((todo) => (
          <ListItem key={todo.id} item={todo} />
        ))}
      </div>
      <div className={styles.button}>
        <button onClick={onClickPlus}>+</button>
        <span>Add new ToDo</span>
      </div>
    </div>
  );
};

export default TodoList;
