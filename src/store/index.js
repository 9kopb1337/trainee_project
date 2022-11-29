import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todos from "../slices/todos";
import users from "../slices/users";

const rootReducer = combineReducers({ todos, users });

export default configureStore({
  reducer: rootReducer
});
