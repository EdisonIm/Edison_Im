import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter03/library';
// import Clock from './chapter04/clock';
// import CommentList from './chapter05/CommentList';
// import NotificationList from './chapter06/NotificationList';
// import Accomodate from './chapter07/Accomodate';
import ConfirmButton from './chapter08/ConfirmButton';

ReactDOM.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
