import React from 'react';
import logo from './doismlogo.png'; // Ensure the path is correct
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DOiSM Digital</h1>
        <p>Your trusted digital marketing partner.</p>
        <p>We specialize in SEO, SEM, Content Marketing, and more!</p>
      </header>
    </div>
  );
}

export default App;
