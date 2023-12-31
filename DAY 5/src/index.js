import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './components/Redux/store';

//import { Provider } from 'react-redux';
//import store from './components/Redux/store';
//import Login from './components/login';
//import Signup from './components/signup';
//import Dashboard from './components/dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);