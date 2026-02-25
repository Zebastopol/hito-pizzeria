import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]  = useState(false); // actualiza estado a false  
  const { login } = useContext(UserContext); //Le entrego la función de usercontext  
  const navigate = useNavigate(); // Y el Hook para redireccionar

  const validarLogin = (e) => {
    e.preventDefault();
    setError(false); // Reiniciar el error

    if (!email.trim() || !password.trim()) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Simulación de login exitoso
    login(); // Llamada correcta a la función del contexto
    navigate('/'); // Redirección al Home
  };

  return (
    <div className="container mt-5">
       <div className="row justify-content-center">
        <div className="col-12 col-md-6">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={validarLogin} className="mt-4" style={{ maxWidth: '400px'}}>
                {error && <p className="text-danger">{error}</p>}
                
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email</label> 
                    <input 
                        type="email" 
                        id="emailInput"     
                        name="email"
                        className="form-control" 
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        autoComplete="email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">Password</label>
                    <input 
                        type="password"
                        id="passwordInput"
                        name="password"
                        className="form-control" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;