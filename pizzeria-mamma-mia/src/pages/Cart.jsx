import React, { useState } from 'react';
import { pizzaCart, pizzas } from '../utils/pizzas'; // Importamos el carrito inicial y las pizzas completas

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar cantidad
  const increase = (id) => {
    setCart(cart.map(p => 
      p.id === id ? { ...p, count: p.count + 1 } : p
    ));
  };

  // Función para disminuir cantidad (elimina si llega a 0)
  const decrease = (id) => {
    const updatedCart = cart.map(p => 
      p.id === id ? { ...p, count: p.count - 1 } : p
    );
    // Filtramos para quitar los que tengan count 0 o menor
    setCart(updatedCart.filter(p => p.count > 0));
  };

  // Calcular total dinámico
  const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

  return (
    <div className="container mt-5 p-5">
      <h2 className="mb-4 text-white">Detalles del pedido:</h2>
      <div className="bg-light p-3 rounded">
        {cart.length === 0 ? (
           <h4 className="text-center">El carrito está vacío 🛒</h4>
        ) : (
           cart.map((pizza) => {
            // Buscar los ingredientes en el array pizzas usando el id
            const pizzaDetails = pizzas.find(p => p.id === pizza.id);
            const ingredients = pizzaDetails ? pizzaDetails.ingredients.join(', ') : '';
            
            return (
            <div key={pizza.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
                <div className="d-flex align-items-center gap-3">
                    <img src={pizza.img} alt={pizza.name} style={{width: '80px', borderRadius: '5px'}} />
                    <div>
                        <h5 className="text-capitalize mb-0">{pizza.name}</h5>
                        <p className="mb-0 text-muted small">🍕 {ingredients}</p>
                    </div>
                </div>
                
                <div className="d-flex align-items-center gap-2">
                    <h5 className="mb-0 text-success">${(pizza.price * pizza.count).toLocaleString('es-CL')}</h5>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => decrease(pizza.id)}>-</button>
                    <span className="fw-bold">{pizza.count}</span>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => increase(pizza.id)}>+</button>
                </div>
            </div>
            );
           })
        )}
        
        <h3 className="mt-4">Total: ${total.toLocaleString('es-CL')}</h3>
        <button className="btn btn-dark mt-3">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
