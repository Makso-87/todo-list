import { createSlice } from '@reduxjs/toolkit';

export enum ShowItems {
  all = 'all',
  active = 'active',
  completed = 'completed',
}

export type TTodoListControlState = {
  showItems: ShowItems;
};

const initialState: TTodoListControlState = {
  showItems: ShowItems.all,
};

export const todoListControlSlice = createSlice({
  name: 'todoListControl',
  initialState,
  reducers: {
    changeItemsShow: (state, action) => {
      state.showItems = action.payload;
    },
  },
});

export const { changeItemsShow } = todoListControlSlice.actions;

export default todoListControlSlice.reducer;
