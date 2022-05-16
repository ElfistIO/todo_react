export const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper container">
          <span className="brand-logo center">Todo App</span>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="Login.html">Log in</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
