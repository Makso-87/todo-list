import React, { ChangeEventHandler } from 'react';
import classes from './Input.module.scss';

type TInput = {
  onInput: ChangeEventHandler<HTMLInputElement>;
  value: string;
};
const Input = (props: TInput) => {
  const { onInput, value } = props;

  return (
    <div className={classes.Input}>
      <input onInput={onInput} value={value} />
    </div>
  );
};

export default Input;
