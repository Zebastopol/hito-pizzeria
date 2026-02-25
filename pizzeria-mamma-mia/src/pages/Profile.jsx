import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { getProfile, logout, email } = useContext(UserContext);
  const [perfilUsuario, setPerfilUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      if (data) setPerfilUsuario(data);
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container mt-5 text-center">
      <div className="card mx-auto" style={{maxWidth: "400px"}}>
        <div className="card-header bg-dark text-white">Mi Perfil</div>
        <div className="card-body">
          <p className="card-text fw-bold fs-5">
            Email: {perfilUsuario?.email || email || "Cargando..."}
          </p>
          <button onClick={handleLogout} className="btn btn-danger mt-3">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;