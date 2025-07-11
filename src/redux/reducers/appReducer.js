import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  useData: {}
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginUserData: (state, action) => {
      state.useData = action.payload;
    },
  },
});

export const { loginUserData } = counterSlice.actions;

export default counterSlice.reducer;