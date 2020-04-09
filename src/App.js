import React from 'react';

import Header from './components/Header/Header';
import NavPanel from './components/NavPanel/NavPanel';
import Users from './components/Users/Users';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="mainWrapper">
        <NavPanel />
        <Users />
      </div>
    </div>
  );
}

export default App;
