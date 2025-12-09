import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/*<Home /> {/* Home contiene el Header y las Cards */} 
      <RegisterPage />
      {/*<LoginPage />*/}
      <Footer />
    </div>
  );
}

export default App;
