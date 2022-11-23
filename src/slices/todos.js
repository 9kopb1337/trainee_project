import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodosByUserId = createAsyncThunk("fetch", async (userId, thunkAPI) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  return await response.json();
});

const todosSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    currentTodo: null,
    fetchPending: false
  },
  reducers: {
    dragStart: (state, action) => {
      console.log(4, state);
      return { ...state, currentTodo: action.payload };
    },
    drop: (state, action) => {
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
  },
  extraReducers: {
    [fetchTodosByUserId.pending]: (state) => {
      console.log(2, state);
      return { ...state, fetchPending: true };
    },
    [fetchTodosByUserId.fulfilled]: (state, action) => {
      console.log(3, state, action);
      return { ...state, fetchPending: false, todos: action.payload };
    }
  }
});

export const { dragStart, drop } = todosSlice.actions;
export default todosSlice.reducer;
