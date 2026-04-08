import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ setTodos, todos }) {
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  const [todo, setTodo] = useState({ name: "", done: false });
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.formcontainer}>
        <input
          className={styles.todoinput}
          onChange={(e) => setTodo({ name: e.target.value })}
          value={todo.name}
          type="text"
          placeholder="Enter your tasks......"
        />
        <button className={styles.submitbutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
