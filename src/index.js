import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer';
//import Register from './components/register';
import Fetch from './components/fetch_register';
import Todo from './components/todo';
import Covid_data from './components/covid_data';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App name="pingifinit" />
    <Todo />
    <Fetch />
    <Covid_data />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
