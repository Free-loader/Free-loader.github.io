import React from 'react';
import ReactDOM from 'react-dom';

import DataLayer from './Context/Context';

import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
