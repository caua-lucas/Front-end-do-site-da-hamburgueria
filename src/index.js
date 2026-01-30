import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import UserProvider from './hooks/UserContext';
import { ToastContainer } from 'react-toastify'
import Routes from './routes/routes'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>

    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </React.StrictMode>
);
