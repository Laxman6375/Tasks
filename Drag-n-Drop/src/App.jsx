import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" m-5">
      <TodoList />
    </div>
  );
}

export default App;
