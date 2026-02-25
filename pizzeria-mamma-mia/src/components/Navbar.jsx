import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // <-- Importamos el contexto
import { UserContext } from '../context/UserContext';

const Navbar = () => {
const { total } = useContext(CartContext); // <-- Consumimos el total
const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mía!</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white border border-white rounded ms-2">🍕 Home</Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link text-white border border-white rounded ms-2">🔓 Profile</Link>
                </li>
                <li className="nav-item">
                  {/*Botón con evento onClick que ejecuta logout */}
                  <button 
                    onClick={logout} 
                    className="nav-link text-white border border-white rounded ms-2 bg-transparent"
                    style={{ cursor: 'pointer' }}
                  >
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-white border border-white rounded ms-2">🔐 Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link text-white border border-white rounded ms-2">🔐 Register</Link>
                </li>
              </>
            )}
          </ul>
          
          <div className="d-flex">
            <Link to="/cart" className="btn btn-outline-info text-info">
                🛒 Total: ${total.toLocaleString('es-CL')} {/* Total dinámico */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
