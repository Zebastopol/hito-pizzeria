import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Mi Perfil</h2>
      <p className="lead">usuario@ejemplo.com</p>
      <button 
        onClick={handleLogout} 
        className="btn btn-danger"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;