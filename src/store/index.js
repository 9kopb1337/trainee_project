import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "../slices/todos";

const rootReducer = combineReducers({
  todos: todosReducer
});

export default configureStore({
  reducer: rootReducer
});
