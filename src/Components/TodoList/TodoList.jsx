import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <nav>
          <div class="nav-wrapper container">
            <span class="brand-logo center">Todo App</span>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li>
                <a href="Login.html">Log in</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <ul class="collection container">
          {todos.map((todo) => (
            <TodoItem />
          ))}
        </ul>
      </main>
    </>
  );
};
