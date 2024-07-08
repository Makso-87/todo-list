import React, { FC, MouseEventHandler } from 'react';
import classes from './ControlButton.module.scss';

type TControlButton = {
  active?: boolean;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const ControlButton: FC<TControlButton> = (props) => {
  const { text, onClick, active = false } = props;

  return (
    <button
      onClick={onClick}
      className={`${classes.ControlButton} ${active ? classes.Active : ''}`}
    >
      {text}
    </button>
  );
};

export default ControlButton;
