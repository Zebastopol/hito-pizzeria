import React, { useContext } from 'react'; // Importar useContext
import { Route, Routes, Navigate } from 'react-router-dom'; // Importar Navigate
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { UserContext } from './context/UserContext'; // Importar Contexto

function App() {
  const { token } = useContext(UserContext); // Consumimos el token

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Rutas Protegidas: Si token es true, no dejamos entrar a Login/Register */}
        <Route 
          path="/register" 
          element={token ? <Navigate to="/" /> : <RegisterPage />} 
        />
        <Route 
          path="/login" 
          element={token ? <Navigate to="/" /> : <LoginPage />} 
        />
        
        <Route path="/cart" element={<Cart />} />
        
        {/* Hito 7: Ruta Dinámica para Pizza */}
        <Route path="/pizza/:id" element={<Pizza />} />
        
        {/* Ruta Protegida: Si no hay token, al login */}
        <Route 
          path="/profile" 
          element={token ? <Profile /> : <Navigate to="/login" />} 
        />
        
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;