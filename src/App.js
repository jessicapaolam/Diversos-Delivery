import React from 'react';
import './App.css';

import List from './Components/List/List';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <List></List>
    </div>
  );
}

export default App;
