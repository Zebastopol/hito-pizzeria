import React from 'react';
import { formatCurrency } from '../utils/format'; // Opcional: si creaste el helper

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white border-bottom border-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white border border-white rounded ms-2" href="#">🍕 Home</a>
            </li>
            
            {/* Renderizado condicional según token */}
            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link text-white border border-white rounded ms-2" href="#">🔓 Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white border border-white rounded ms-2" href="#">🔒 Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link text-white border border-white rounded ms-2" href="#">🔐 Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white border border-white rounded ms-2" href="#">🔐 Register</a>
                </li>
              </>
            )}
          </ul>
          
          <div className="d-flex">
            <a className="btn btn-outline-info text-info" href="#">
                🛒 Total: {total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
