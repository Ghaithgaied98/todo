import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDO, doneTodo } from "../actions/TodoActions";

const handleFilter = (filter, todo) => {
  switch (filter) {
    case "done":
      return todo.filter((el) => el.isDone === true);
    case "not_done":
      return todo.filter((el) => el.isDone === false);
    case "no_filter":
    default:
      return todo;
  }
};
const ListTack = () => {
  const todo = useSelector((state) => state.TodoReducer.todos);
  const filter = useSelector((state) => state.TodoReducer.filterValue);
  const dispatch = useDispatch();
  const result = handleFilter(filter, todo);
  return (
    <div>
      {result.map((el) => (
        <div key={el.id}>
          <h3>{el.title}</h3>
          <button onClick={() => dispatch(deleteToDO(el.id))}>delete</button>
          <button onClick={() => dispatch(doneTodo(el.id))}>
            {el.isDone ? "undone" : "done"}
          </button>
          <button>edit</button>
        </div>
      ))}
    </div>
  );
};

export default ListTack;
