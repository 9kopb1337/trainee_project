import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userId: 1
  },
  reducers: {
    setUserId: (state, { payload: userId }) => ({ ...state, userId })
  }
});

export const selectUserId = (state) => state.users.userId;
export const { setUserId } = usersSlice.actions;
export default usersSlice.reducer;
