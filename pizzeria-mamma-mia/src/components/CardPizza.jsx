import React from 'react';

const CardPizza = ({ name, price, ingredients, img, desc }) => {
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
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-center fw-bold fs-4">
                  Precio: ${price.toLocaleString('es-CL')}
              </li>
            </ul>
        <div className="card-body d-flex justify-content-between">
          <button className="btn btn-light border border-dark">Ver Más 👀</button>
          <button className="btn btn-dark">Añadir 🛒</button>
        </div>
    </div>
  );
};

export default CardPizza;
