import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './styles.scss';

const rootElement = document.querySelector('#app');
const root = createRoot(rootElement);
root.render(<App />);
