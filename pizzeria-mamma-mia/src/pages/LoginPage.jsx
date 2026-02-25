import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const validarDatos = async (e) => {
    e.preventDefault();
    if (!emailInput.trim() || !passwordInput.trim()) {
      setError('Todos los campos son obligatorios');
      return;
    }
    if (passwordInput.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    setError('');
    
    const exito = await login(emailInput, passwordInput); 
    if (exito) navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={validarDatos} className="mt-4" style={{ maxWidth: '400px' }}>
        {error && <p className="text-danger fw-bold">{error}</p>}
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email</label>
          <input type="email" id="emailInput" name="email" className="form-control" onChange={(e) => setEmailInput(e.target.value)} value={emailInput} autoComplete="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input type="password" id="passwordInput" name="password" className="form-control" onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput} autoComplete="current-password" />
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginPage;