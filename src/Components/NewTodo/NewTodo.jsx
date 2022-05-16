import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { API_URL, fetchTodos } from "../TodoList/TodoListSlice";

export const NewTodo = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function createNewTodo(username, email, text) {
    return async (dispatch) => {
      axios
        .post(API_URL, {
          id: nanoid(),
          username: username,
          email: email,
          text: text,
          status: 0,
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  }

  const handleSubmitNewTodo = (e) => {
    e.preventDefault();
    if (!username || !email || !text) {
      return;
    } else {
      dispatch(createNewTodo(username, email, text));
      dispatch(fetchTodos());
      setUsername("");
      setEmail("");
      setText("");
    }
  };
  return (
    <div className="container">
      <div className="row container">
        <h5 className="center-align">Add New Todo</h5>
        <form className="col s12" onSubmit={(e) => handleSubmitNewTodo(e)}>
          <div className="row center-align">
            <div className="input-field col s6">
              <input
                id="username"
                type="text"
                className="validate"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field col s6">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                onChange={(e) => setText(e.target.value)}
                value={text}
              ></textarea>
              <label htmlFor="textarea1">Textarea</label>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
