import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link

// Asegúrate de recibir el ID como prop (tendrás que pasarlo desde Home.jsx)
const CardPizza = ({ id, name, price, ingredients, img, desc, handleAdd }) => {
  return (
<div className="card h-100 mt-3 mb-3">
      <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h4 className="card-title text-start text-capitalize">{name}</h4>
          <hr />
          <p className="card-text text-muted" style={{fontSize: '0.85rem'}}>{desc}</p>
          <hr />
          <p className="card-text text-center"><strong>Ingredientes:</strong></p>
          <div className="d-flex flex-wrap justify-content-center gap-2" style={{fontSize: '0.9rem'}}>
              {/* Renderización Dinámica de Ingredientes */}
              {ingredients.map((ingredient, index) => (
                  <span key={index} className="badge bg-light text-dark text-capitalize">
                       🍕 {ingredient}
                  </span>
              ))}
          </div>
        </div>      
      <div className="card-body d-flex justify-content-between">
        {/* Enlace dinámico a /pizza/p001, /pizza/p002, etc. */}
        <Link to={`/pizza/${id}`} className="btn btn-light border border-dark">
            Ver Más 👀
        </Link>
        
        <button className="btn btn-dark" onClick={handleAdd}>Añadir 🛒</button>
      </div>
    </div>
  );
};
export default CardPizza;
