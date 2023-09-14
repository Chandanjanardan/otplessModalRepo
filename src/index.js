import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Login from './component/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login/>
    {/* <Mobile/> */}
  </React.StrictMode>
);

