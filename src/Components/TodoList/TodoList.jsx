import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, todosSelector } from "./TodoListSlice";
import { NewTodo } from "../NewTodo/NewTodo";
import { Filter } from "../Filter/Filter";
import { TodoItem } from "../TodoItem/TodoItem";
import { useEffect, useState } from "react";
import { Pagination } from "../Pagination/Pagination";

export const TodoList = ({ itemsPerPage }) => {
  const dispatch = useDispatch();
  const { loading, error, todos } = useSelector(todosSelector);
  const [paginateTodos, setPaginateTodos] = useState(todos);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setPaginateTodos(todos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(todos.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, todos]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % todos.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <main>
      <NewTodo />
      <Filter />
      <ul className="collection container">
        {!error && !loading ? (
          paginateTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        ) : (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        )}
      </ul>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </main>
  );
};
