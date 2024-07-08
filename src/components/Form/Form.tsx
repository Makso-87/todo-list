import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/todoListSlice';
import classes from './Form.module.scss';
const Form = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  const onInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setInputText(value);
  };
  const onButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    dispatch(addItem(inputText));
    setInputText('');
  };

  return (
    <form action='#' className={classes.Form}>
      <Input onInput={onInput} value={inputText} />
      <button onClick={onButtonClick} className={classes.AddButton}>
        Add
      </button>
    </form>
  );
};

export default Form;
