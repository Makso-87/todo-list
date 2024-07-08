import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './styles.css';
import { store } from './store/store';
import { Provider } from 'react-redux';

const rootElement = document.querySelector('#app');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
