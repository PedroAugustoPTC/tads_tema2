import React from 'react';
import Routes from './routes';

import './assets/styles/global.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes />

    </div>
  );
}

export default App;
