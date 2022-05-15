import React from "react";
import { Counter } from "./Components/Counter";
import { TodoList } from "./Components/TodoList/TodoList";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
