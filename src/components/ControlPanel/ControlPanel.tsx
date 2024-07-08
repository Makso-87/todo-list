import React from 'react';
import classes from './ControlPanel.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import ControlButton from './ControlButton/ControlButton';
import { changeItemsShow } from '../../store/slices/todoListControlSlice';
import { clearCompleted } from '../../store/slices/todoListSlice';

const controlButtonsData = [
  {
    text: 'All',
    type: 'all',
  },
  {
    text: 'Active',
    type: 'active',
  },
  {
    text: 'Completed',
    type: 'completed',
  },
];

const getQuantityItems = (length: number) => {
  if (!length) {
    return 'No items left';
  }

  if (length === 1) {
    return `${length} item left`;
  }

  return `${length} items left`;
};

const ControlPanel = () => {
  const list = useSelector((state: RootState) => state.todoList.list);
  const showItems = useSelector((state: RootState) => state.todoListControl.showItems);
  const dispatch = useDispatch();
  const activeItems = list.filter((item) => !item.isCompleted);
  const filterButtonClick = (type: string) => {
    dispatch(changeItemsShow(type));
  };

  const clearButtonClick = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className={classes.ControlPanel}>
      <div className={classes.ItemsInfo}>{getQuantityItems(activeItems.length)}</div>

      <div className={classes.FilterButtons}>
        {controlButtonsData.map((item) => {
          return (
            <ControlButton
              active={showItems === item.type}
              key={item.type}
              text={item.text}
              onClick={() => filterButtonClick(item.type)}
            />
          );
        })}
      </div>

      <ControlButton text='Clear completed' onClick={clearButtonClick} />
    </div>
  );
};
export default ControlPanel;
