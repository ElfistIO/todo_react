import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { API_URL, setTodos, setError } from "../TodoList/TodoListSlice";
import M from "materialize-css";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token"));
  const [todoText, setTodoText] = useState("");
  M.AutoInit();

  function statusChecker() {
    if (todo.status === 10) {
      return 0;
    } else {
      return 10;
    }
  }

  function handleTodoText(todo) {
    if (todoText === "") {
      return;
    } else {
      return async () => {
        axios
          .put(`${API_URL}/${todo.id}`, {
            id: todo.id,
            username: todo.username,
            email: todo.email,
            text: todoText,
            status: todo.status,
          })
          .then(() => {
            setTodoText("");
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
      <div className="row mb-0">
        <div className="col s3">
          <span className="title">{todo.username}</span>
          <p>{todo.email}</p>
        </div>
        <div className="row mb-0">
          {token ? (
            <form
              className="input-field col s6"
              onSubmit={handleTodoText(todo)}
            >
              <input
                id="todoText"
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
              />
              <label htmlFor="todoText">{todo.text}</label>
              <button type="submit" className="btn-small">
                Submit
                <i className="material-icons right">send</i>
              </button>
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
