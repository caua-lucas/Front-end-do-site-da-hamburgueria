import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './containers/Login'
import GlobalStyles from './styles/globalStyles';
import Register from './containers/Register';
import { ToastContainer, toast } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <Register/>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles/>
  </React.StrictMode>
  </>
);



