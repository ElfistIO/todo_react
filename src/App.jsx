import { Header } from "./Components/Header/Header";
import { TodoList } from "./Components/TodoList/TodoList";
import { Login } from "./Components/Login/Login";
import { NotFound } from "./Components/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

M.AutoInit();

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TodoList itemsPerPage={3} />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
