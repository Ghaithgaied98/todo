import { v4 as uuidv4 } from "uuid";
import {
  ADD_TODO,
  DELETE_TODO,
  DONE_TODO,
  FILTER_TODO,
} from "../actions/types";

let todos = [
  { id: uuidv4(), title: "Workout", isDone: false },
  { id: uuidv4(), title: "Sleep", isDone: false },
];

const TodoReducer = (state = { todos, filterValue: "no_filter" }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((e) => e.id !== action.payload),
      };
    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case FILTER_TODO:
      return {
        ...state,
        filterValue: action.payload,
      };
    default:
      return state;
  }
};

export default TodoReducer;
