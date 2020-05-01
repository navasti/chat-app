import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import firebase from 'firebase';
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAlbA4z639hZq7k0Naihjw9NQSscAVJa0Y",
  authDomain: "chat-app-ea5f5.firebaseapp.com",
  databaseURL: "https://chat-app-ea5f5.firebaseio.com",
  projectId: "chat-app-ea5f5",
  storageBucket: "chat-app-ea5f5.appspot.com",
  messagingSenderId: "541063418900",
  appId: "1:541063418900:web:a4c8d16985fa5a80080301",
  measurementId: "G-JXXQMTKR47"
});

const routing = (
  <Router>
    <div className="app">
      <Route path="/login" component={Login}/>
      <Route path="/sign-up" component={Signup}/>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>, document.getElementById('root')
);
