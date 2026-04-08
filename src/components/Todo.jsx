import { useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completed = todos.filter((todo) => todo.done).length;
  return (
    <div>
      <Form setTodos={setTodos} todos={todos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer completed={completed} total={todos.length} />
    </div>
  );
}
