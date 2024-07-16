import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="App-main">
        <p>We offer complete Digital Marketing Solutions, ranging from SEO, SEM, Web Development, and more!</p>
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
