import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './pages/styles/GlobalStyle';
import ResetStyle from './pages/styles/ResetStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
