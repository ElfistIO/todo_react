import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper container">
          <span className="brand-logo center">Todo App</span>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="/">Todo List</Link>
            </li>
            <li>
              <Link to="/Login">Log in</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
