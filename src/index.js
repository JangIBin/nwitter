import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

