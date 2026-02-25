import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const RegisterPage = () => {
  const [emailInputReg, setEmailInputReg] = useState('');
  const [passwordInputReg, setPasswordInputReg] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const validarDatos = async (e) => {
    e.preventDefault();
    if (!emailInputReg.trim() || !passwordInputReg.trim() || !confirmPassword.trim()) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    if (passwordInputReg.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (passwordInputReg !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setError(''); 
    const exito = await register(emailInputReg, passwordInputReg);
    if (exito) navigate('/');
  };

  return (
    <div className="container mt-5 mb-5">
      <h2>Registro</h2>
      <form onSubmit={validarDatos} className="mt-4" style={{ maxWidth: '400px' }}>
        {error && <p className="text-danger fw-bold">{error}</p>}
        <div className="mb-3">
          <label htmlFor="emailInputReg" className="form-label">Email</label>
          <input type="email" id="emailInputReg" name="email" className="form-control" onChange={(e) => setEmailInputReg(e.target.value)} value={emailInputReg} autoComplete="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInputReg" className="form-label">Password</label>
          <input type="password" id="passwordInputReg" name="password" className="form-control" onChange={(e) => setPasswordInputReg(e.target.value)} value={passwordInputReg} autoComplete="new-password" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPasswordInputReg" className="form-label">Confirmar Password</label>
          <input type="password" id="confirmPasswordInputReg" name="confirmPassword" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} autoComplete="new-password" />
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterPage;