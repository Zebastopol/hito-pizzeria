import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Home /> {/* Home contiene el Header y las Cards */}
      <Footer />
    </div>
  );
}

export default App;
