import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Pizza from './pages/Pizza';
//import RegisterPage from './components/RegisterPage';
//import LoginPage from './components/LoginPage';
//import Cart from './components/Cart';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/*<Home />  Home contiene el Header y las Cards*/} 
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      {/*<Cart />*/}
      <Pizza />
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      {/*<Cart />*/}
      <Footer />
    </div>
  );
}

export default App;
