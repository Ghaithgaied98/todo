import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/TodoActions";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Write a todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo({ id: uuidv4(), title: input, isDone: false }));
          setInput("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
