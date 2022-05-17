import { useDispatch } from "react-redux";
import { setTodos, setError } from "../TodoList/TodoListSlice";
import axios from "axios";
import { API_URL } from "../TodoList/TodoListSlice";
import M from "materialize-css";

export const Filter = () => {
  const dispatch = useDispatch();
  M.AutoInit();

  function handleUsernameFilter() {
    return async () => {
      axios
        .get(`${API_URL}?_sort=username&_order=asc`)
        .then((response) => {
          dispatch(setTodos(response.data));
        })
        .catch((error) => {
          dispatch(setError(error.message));
        });
    };
  }

  function handleEmailFilter() {
    return async () => {
      axios
        .get(`${API_URL}?_sort=email&_order=asc`)
        .then((response) => {
          dispatch(setTodos(response.data));
        })
        .catch((error) => {
          dispatch(setError(error.message));
        });
    };
  }
  function handleStatusFilter() {
    return async () => {
      axios
        .get(`${API_URL}?_sort=status&_order=desc`)
        .then((response) => {
          dispatch(setTodos(response.data));
        })
        .catch((error) => {
          dispatch(setError(error.message));
        });
    };
  }
  return (
    <div className="row container">
      <span>Filter by : </span>
      <button className="dropdown-trigger btn-small" data-target="dropdown2">
        ...<i className="material-icons right">arrow_drop_down</i>
      </button>
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <a
            className="center-align"
            href="#!"
            onClick={handleUsernameFilter()}
          >
            Username
          </a>
        </li>
        <li>
          <a className="center-align" href="#!" onClick={handleEmailFilter()}>
            E-mail
          </a>
        </li>
        <li>
          <a className="center-align" href="#!" onClick={handleStatusFilter()}>
            Status
          </a>
        </li>
      </ul>
    </div>
  );
};
