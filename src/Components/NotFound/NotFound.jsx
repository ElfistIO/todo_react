import React from "react";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();
  const redirectTodosList = () => {
    navigate("/");
  };

  return (
    <div className="container center-align">
      <h1>404</h1>
      <h2>NOT FOUND</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <button className="btn" onClick={redirectTodosList}>
        Go back to the home page
      </button>
    </div>
  );
};

export default NotFound;
