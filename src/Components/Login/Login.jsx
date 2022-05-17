import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [catchError, setCatcherError] = useState();
  const navigate = useNavigate();
  const redirectTodosList = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/login`, {
        email: login,
        password: password,
      })
      .then((response) => {
        localStorage.setItem(
          "token",
          JSON.stringify({
            userLogin: true,
            token: response.data.accessToken,
          })
        );
        console.log(response);
        redirectTodosList();
      })
      .catch((error) => {
        setCatcherError(true);
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row mt-200">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="input-field col s4 offset-s4">
            <input
              id="login"
              type="text"
              className="validate"
              required
              onChange={(e) => setLogin(e.target.value)}
            />
            <label htmlFor="login">Login</label>
          </div>
          <div className="input-field col s4 offset-s4">
            <input
              id="password"
              type="password"
              className="validate"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            {catchError === true && (
              <div style={{ color: "red" }}>Wrong email or password</div>
            )}
          </div>
          <div className="col s4 offset-s4 center-align mt-20">
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
