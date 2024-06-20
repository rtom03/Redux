// src/reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import conterSlice from './conterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
