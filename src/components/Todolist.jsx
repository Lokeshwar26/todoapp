import Todoitems from "./Todoitems";
import styles from "./Todolist.module.css";
export default function Todolist({ todos, setTodos }) {
  return (
    <div className={styles.lists}>
      {todos.map((item) => (
        <Todoitems
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
