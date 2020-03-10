import React from 'react';
import './App.css';
import wands from './wands.js'
import List from './List'

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="content col-10">
          <List wands={wands}/>
        </div>
      </div>
    </div>
  );
}

export default App;
