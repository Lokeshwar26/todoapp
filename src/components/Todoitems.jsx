import styles from "./Todoitems.module.css";
export default function Todoitems({ item, todos, setTodos }) {
  function handledelete() {
    console.log("delete button clicked for", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleclick() {
    const newarray = todos.map((todo) =>
      todo.name === item.name ? { ...todo, done: !todo.done } : todo,
    );
    setTodos(newarray);
  }
  const done = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span className={done} onClick={() => handleclick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handledelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
