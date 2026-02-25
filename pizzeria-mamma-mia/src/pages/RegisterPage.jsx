import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const RegisterPage = () => {
  // 1. Estados locales para los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  // 2. consumo del contexto y el hook de navegación para autologin y redirección
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const validarDatos = (e) => {
    e.preventDefault();
    
    // Validaciones de negocio
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    alert("¡Te damos la Bienvenida!")
    // Si todo es correcto, limpiamos errores
    setError(''); 
    
    // 3. Simulamos un registro exitoso que auto-loguea al usuario
    login();
    
    // 4. Redirigimos al Home para sacarlo de esta vista - Opcional redirigir a Profile
    navigate('/');
  };

  return (
    <div className="container mt-5">
       <div className="row justify-content-center">
        <div className="col-12 col-md-6">
            <h2>Registro</h2>
            <form onSubmit={validarDatos} className="mt-4" style={{ maxWidth: '400px' }}>
              {/* Renderizado condicional del error */}
              {error && <p className="text-danger fw-bold">{error}</p>}
              
              <div className="mb-3">
                <label htmlFor="emailInputReg" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="emailInputReg"
                  name="email"
                  className="form-control" 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email}
                  autoComplete="email"
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="passwordInputReg" className="form-label">Password</label>
                <input 
                  type="password" 
                  id="passwordInputReg"
                  name="password"
                  className="form-control" 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password}
                  autoComplete="new-password" 
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPasswordInputReg" className="form-label">Confirmar Password</label>
                <input 
                  type="password" 
                  id="confirmPasswordInputReg"
                  name="confirmPassword"
                  className="form-control" 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  value={confirmPassword}
                  autoComplete="new-password"
                />
              </div>
              
              <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
      </div>
    </div>  );
};


export default RegisterPage;