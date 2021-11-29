import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from "./views/Main"
import Detail from './views/Detail';
import Update from './views/Update';
import Register from './views/Register';

function App() {

  return (
   <>
    
      <h1>Favorite Authors</h1>
    
      <Router>
        <Main path="/"/>
        <Register path="/new"/>
        <Detail path="/:id" />
        <Update path="/edit/:id" />
      </Router>
  </>
  )
}

export default App;
