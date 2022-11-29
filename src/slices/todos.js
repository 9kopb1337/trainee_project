import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodosByUserId = createAsyncThunk("fetch", async (userId, thunkAPI) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  return await response.json();
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    currentTodo: null,
    fetchPending: false
  },
  reducers: {
    dragStart: (state, { payload: currentTodo }) => ({ ...state, currentTodo }),
    drop: (state, { payload: completed }) => {
      if (state.currentTodo.completed === completed) {
        return { ...state, currentTodo: null };
      }
      const updatedTodo = { ...state.currentTodo, completed };
      const todos = state.todos.filter((todo) => todo.id !== state.currentTodo.id).concat([updatedTodo]);
      return { ...state, currentTodo: null, todos };
    }
  },
  extraReducers: {
    [fetchTodosByUserId.pending]: (state) => ({ ...state, fetchPending: true }),
    [fetchTodosByUserId.fulfilled]: (state, { payload: todos }) => ({ ...state, fetchPending: false, todos })
  }
});

export const selectTodos = (state) => state.todos.todos;
export const { dragStart, drop } = todosSlice.actions;
export default todosSlice.reducer;
