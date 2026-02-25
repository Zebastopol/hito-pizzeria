import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams(); 
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    consultarPizza();
  }, [id]); 

  const consultarPizza = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const url = `${apiUrl}/api/pizzas/${id}`;
      
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error('Error al consultar la API de pizza:', error);
    }
  };

  if (!pizza) return <div className="text-center mt-5 spinner-border"></div>;

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card">
            <img src={pizza.img} className="card-img-top" alt={pizza.name} style={{ maxHeight: '400px', objectFit: 'cover' }} />
            <div className="card-body">
              <h2 className="card-title text-capitalize mb-3">{pizza.name}</h2>
              <p className="card-text text-muted mb-4">{pizza.desc}</p>
              <h5>Ingredientes:</h5>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {pizza.ingredients.map((ingredient, index) => (
                  <span key={index} className="badge bg-light text-dark text-capitalize fs-6">🍕 {ingredient}</span>
                ))}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Precio: <span className="text-success">${pizza.price.toLocaleString('es-CL')}</span></h3>
                <button className="btn btn-dark btn-lg" onClick={() => addToCart(pizza)}>Añadir al carrito 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;