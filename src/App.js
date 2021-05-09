import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <h2>The Components way</h2>
      <LoginPage />
      <br />
      <Logout />
    </div>
  );
}

export default App;