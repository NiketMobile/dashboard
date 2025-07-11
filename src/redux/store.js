// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/appReducer';

export const store = configureStore({
  reducer: {
    appReducer: counterReducer,
    // add other reducers here
  },
});