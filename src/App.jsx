import { useState } from "react";
import styles from "./components/app.module.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Todo />
    </div>
  );
}

export default App;
