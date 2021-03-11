import React from "react";
import { useDispatch } from "react-redux";
import { filterTodo } from "../actions/TodoActions";

const FilterTask = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <label name="not_filter">No Filter</label>
        <input
          type="radio"
          value="no_filter"
          name="no_filter"
          onChange={(e) => dispatch(filterTodo(e.target.value))}
        />
        <label name="done">Done</label>
        <input
          type="radio"
          value="done"
          name="no_filter"
          onChange={(e) => dispatch(filterTodo(e.target.value))}
        />
        <label name="not_done">Not Done</label>
        <input
          type="radio"
          value="not_done"
          name="no_filter"
          onChange={(e) => dispatch(filterTodo(e.target.value))}
        />
      </form>
    </div>
  );
};

export default FilterTask;
