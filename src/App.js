import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import { Home } from './Pages/Home';
import { New } from './Pages/New';
import { Edit } from './Pages/Edit';
import { Delete } from './Pages/Delete';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Router>
        <Home path="/" />
        <New path="/new" />
        <Edit path="/:id/edit" />
        <Delete path="/:id/delete"/>
      </Router>
    </div>
  );
}

export default App;
