import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="App-main">
        <p>We offer complete Digital Marketing Solutions, ranging from SEO, SEM, Web Development, and more!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
