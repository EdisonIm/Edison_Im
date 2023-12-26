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
// import ConfirmButton from './chapter08/ConfirmButton';
// import LandingPage from './chapter09/LandingPage';
// import AttendanceBook from './chapter10/AttendanceBook';
// import SignUp from './chapter11/SignUp';
// import Calculator from './chapter12/Calculator';
// import ProfileCard from './chapter13/ProfileCard';
import DarkOrLight from './chapter14/DarkOrLight';

ReactDOM.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
