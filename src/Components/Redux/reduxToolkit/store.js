import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const RKTStore = configureStore({
  reducer: {
    counter: counterReducer
  }
});