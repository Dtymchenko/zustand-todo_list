import React from "react";
import styles from "./ListItem.module.scss";

const ListItem = ({ item, todos, setTodos }) => {
  const [checkbox, setCheckbox] = React.useState(item.completed);

  const handleComplete = () => {
    setCheckbox(!checkbox);
  };

  const handleRemove = (id) => {
    setTodos([...todos?.filter((item) => item.id !== id)]);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.input}>
        <span className={styles.switch_complete}>Switch completed</span>
        <input checked={checkbox} onChange={handleComplete} type="checkbox" />
      </span>
      <span
        className={checkbox ? `${styles.title_complete}` : `${styles.title}`}
      >
        {item.title}
      </span>
      <span className={styles.input}>
        <button onClick={() => handleRemove(item.id)}>X</button>
        <span className={`${styles.switch_complete} ${styles.switch_remove}`}>
          Remove ToDo
        </span>
      </span>
    </div>
  );
};

export default ListItem;
