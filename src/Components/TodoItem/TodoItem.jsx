export const TodoItem = ({ todo }) => {
  return (
    <li className="collection-item avatar">
      <i className="material-icons circle">subject</i>
      <div className="row">
        <div className="col s4">
          <span className="title">{todo.username}</span>
          <p>{todo.email}</p>
        </div>
        <div className="col s8">
          <p className="">{todo.text}</p>
        </div>
      </div>
      <form className="secondary-content">
        <label>
          <input type="checkbox" disabled="disabled" />
          <span>Not Comleted</span>
        </label>
      </form>
    </li>
  );
};
