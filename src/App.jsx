import React from "react";
import { TodoList } from "./Components/TodoList/TodoList";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Header } from "./Components/Header/Header";

M.AutoInit();

function App() {
  return (
    <>
      <Header />
      <TodoList itemsPerPage={3} />
    </>
  );
}

export default App;
