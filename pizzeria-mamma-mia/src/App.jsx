import React from 'react';
import Navbar from './components/Navbar';
//import Home from './components/Home';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
//import RegisterPage from './components/RegisterPage';
//import LoginPage from './components/LoginPage';
//import Cart from './components/Cart';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/*<Home /> Home contiene el Header y las Cards*/}
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      {/*<Cart />*/}
      <Pizza />
      <Footer />
    </div>
  );
}

export default App;
