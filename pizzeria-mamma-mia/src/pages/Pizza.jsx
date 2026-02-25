import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'; // 1. Importamos useParams
import { CartContext } from '../context/CartContext'; // (Opcional) Para que funcione el botón

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  
  // 2. Extraemos el 'id' de la URL (ej: p002)
  const { id } = useParams(); 
  
  // Consumimos el contexto para activar el botón (Bonus)
  const { addToCart } = useContext(CartContext);

  // 3. Agregamos [id] como dependencia
  useEffect(() => {
    consultarPizza();
  }, [id]); 

  const consultarPizza = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      
      // 4. Inyectamos el ID dinámico en la URL de la API
      const url = `${apiUrl}/api/pizzas/${id}`;
      
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error('Error al consultar la API de pizza:', error);
    }
  };

  if (!pizza) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card">
            <img 
              src={pizza.img} 
              className="card-img-top" 
              alt={pizza.name}
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h2 className="card-title text-capitalize mb-3">{pizza.name}</h2>
              <hr />
              <p className="card-text text-muted mb-4">{pizza.desc}</p>
              <hr />
              <div className="mb-4">
                <h5 className="mb-3">Ingredientes:</h5>
                <div className="d-flex flex-wrap gap-2">
                  {pizza.ingredients.map((ingredient, index) => (
                    <span 
                      key={index} 
                      className="badge bg-light text-dark text-capitalize fs-6"
                    >
                      🍕 {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-0">
                  Precio: <span className="text-success">${pizza.price.toLocaleString('es-CL')}</span>
                </h3>
                
                {/* Conectamos el botón al Contexto */}
                <button 
                  className="btn btn-dark btn-lg"
                  onClick={() => addToCart(pizza)}
                >
                  Añadir al carrito 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;