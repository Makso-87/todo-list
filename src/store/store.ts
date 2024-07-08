import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './slices/todoListSlice';
import todoListControlReducer from './slices/todoListControlSlice';

export const store = configureStore({
  reducer: { todoList: todoListReducer, todoListControl: todoListControlReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
