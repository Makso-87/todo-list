import React from 'react';
import classes from './Layout.module.scss';
import Form from '../Form/Form';
import List from '../List/List';
import ControlPanel from '../ControlPanel/ControlPanel';
const Layout = () => {
  return (
    <div className={classes.Layout}>
      <div className={classes.Wrapper}>
        <h1 className={classes.Title}>To do list</h1>

        <div className={classes.Container}>
          <Form />
          <List />
          <ControlPanel />
        </div>
      </div>
    </div>
  );
};

export default Layout;
