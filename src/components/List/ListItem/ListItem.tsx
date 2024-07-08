import React, { FC, MouseEventHandler } from 'react';
import classes from './ListItem.module.scss';
import { TTodoListItem } from '../../../store/slices/todoListSlice';

type TListItem = {
  item: TTodoListItem;
  onClick: MouseEventHandler<HTMLLIElement>;
};

const ListItem: FC<TListItem> = ({ item, onClick }) => {
  const { name, id, isCompleted } = item;

  return (
    <li
      onClick={onClick}
      className={`${classes.ListItem} ${isCompleted ? classes.Completed : ''}`}
      key={id}
    >
      <div className={classes.Icon} />
      <div className={classes.Text}>{name}</div>
    </li>
  );
};

export default ListItem;
