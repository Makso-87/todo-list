import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export type TTodoListItem = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export type TTodoListState = {
  list: TTodoListItem[];
};

const initialState: TTodoListState = {
  list: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      if (!!action.payload) {
        state.list.push({
          id: nanoid(),
          name: action.payload,
          isCompleted: false,
        });
      }
    },
    markCompleted: (state, action: PayloadAction<string>) => {
      state.list = state.list.map((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted;
          return item;
        }

        return item;
      });
    },
    clearCompleted: (state) => {
      state.list = state.list.filter((item) => !item.isCompleted);
    },
  },
});

export const { addItem, markCompleted, clearCompleted } = todoListSlice.actions;

export default todoListSlice.reducer;
