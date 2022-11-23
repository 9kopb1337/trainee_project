import { createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todos: [],
  fetchInProgress: false,
  currentTodo: null
};

export default createReducer(INITIAL_STATE, {
  [fetchTodosByUserId.pending]: (state) => {
    console.log(2, state);
    return { ...state, fetchInProgress: true };
  },
  [fetchTodosByUserId.fulfilled]: (state, action) => {
    console.log(3, state, action);
    return { ...state, fetchInProgress: false, todos: action.payload };
  },
  [todoDragStart]: (state, action) => {
    console.log(4, state);
    return { ...state, currentTodo: action.payload };
  },
  [todoDrop]: (state, action) => {
    console.log(5, state);
    let currentElement = document.querySelector(`[class="${action.payload}"]`);
    while (!currentElement.classList.contains("todos-column")) {
      currentElement = currentElement.parentElement;
    }
    const completed = currentElement.classList.contains("todos-column__completed");

    console.log(state.currentTodo, state);
    if (state.currentTodo.completed !== completed) {
      const updatedTodo = { ...state.currentTodo, completed };
      return {
        ...state,
        currentTodo: null,
        todos: state.todos.filter((todo) => todo.id !== state.currentTodo.id).concat([updatedTodo])
      };
    }
    return { ...state, currentTodo: null };
  }
});
