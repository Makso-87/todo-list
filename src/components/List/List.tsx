import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markCompleted, TTodoListItem } from '../../store/slices/todoListSlice';
import classes from './List.module.scss';
import type { RootState } from '../../store/store';
import ListItem from './ListItem/ListItem';

const getFilteredList: Record<string, (item: TTodoListItem) => boolean> = {
  all: (item) => !!item,
  active: (item) => !item.isCompleted,
  completed: (item) => item.isCompleted,
};

const List = () => {
  const list: TTodoListItem[] = useSelector((state: RootState) => state.todoList?.list);
  const showItems = useSelector((state: RootState) => state.todoListControl.showItems);
  const dispatch = useDispatch();
  const onListItemCompletedCLick = (id: string) => {
    dispatch(markCompleted(id));
  };

  const handledList = list.filter((item) => getFilteredList[showItems](item));

  return (
    <ul className={classes.List}>
      {handledList.map((item: TTodoListItem) => {
        return (
          <ListItem item={item} key={item.id} onClick={() => onListItemCompletedCLick(item.id)} />
        );
      })}
    </ul>
  );
};

export default List;
