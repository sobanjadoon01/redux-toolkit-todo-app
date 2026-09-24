 import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../too/feature/todoSlice.js';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});