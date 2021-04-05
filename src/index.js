import React from 'react';
import { render }from 'react-dom';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
