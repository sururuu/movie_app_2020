import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // App -> component : HTML 을 반환하는 함수
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

