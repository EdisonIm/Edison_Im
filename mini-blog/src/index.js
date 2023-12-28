import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18에서의 새로운 임포트 방식
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// createRoot 메서드를 사용하여 루트 DOM 노드를 생성합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
