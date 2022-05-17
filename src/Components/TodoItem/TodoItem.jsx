import axios from "axios";
import { useDispatch } from "react-redux";
import { API_URL, setTodos, setError } from "../TodoList/TodoListSlice";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token"));
  function statusChecker() {
    if (todo.status === 10) {
      return 0;
    } else {
      return 10;
    }
  }

  function handleTodoStatus(todo) {
    return async () => {
      axios
        .put(`${API_URL}/${todo.id}`, {
          id: todo.id,
          username: todo.username,
          email: todo.email,
          text: todo.text,
          status: parseInt(`${statusChecker()}`),
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(
          axios
            .get(API_URL)
            .then((response) => {
              dispatch(setTodos(response.data));
            })
            .catch((error) => {
              dispatch(setError(error.message));
            })
        );
    };
  }

  return (
    <li className="collection-item avatar">
      <i className="material-icons circle">subject</i>
      <div className="row">
        <div className="col s4">
          <span className="title">{todo.username}</span>
          <p>{todo.email}</p>
        </div>
        {/* <form className="col s6">
          <input disabled id="todoText" type="text" />
          <label htmlFor="todoText">{todo.text}</label>
        </form> */}
        <div className="col s6">
          {token ? (
            <form className="col s6">
              <input id="todoText" value={todo.text} type="text" />
              <label htmlFor="todoText">{todo.text}</label>
            </form>
          ) : (
            <p>{todo.text}</p>
          )}
        </div>
      </div>
      <form className="secondary-content">
        <label>
          <input
            type="checkbox"
            disabled={!token ? "disabled" : ""}
            checked={
              token === undefined
                ? "checked"
                : todo.status === (10 || 11)
                ? "checked"
                : ""
            }
            onChange={handleTodoStatus(todo)}
          />
          <span>
            {todo.status === (10 || 11) ? "Completed" : "Not Completed"}
          </span>
        </label>
      </form>
    </li>
  );
};
