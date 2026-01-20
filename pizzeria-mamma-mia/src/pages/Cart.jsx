import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // <-- Importamos

const Cart = () => {
  // Consumimos todo del contexto, ya no usamos useState local
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);

  return (
    <div className="container mt-5 p-5">
      <h2 className="mb-4">Detalles del pedido:</h2>
      <div className="bg-light p-3 rounded">
        {cart.length === 0 ? (
           <h4 className="text-center">El carrito está vacío 🛒</h4>
        ) : (
           cart.map((pizza) => (
            <div key={pizza.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
                <div className="d-flex align-items-center gap-3">
                    <img src={pizza.img} alt={pizza.name} style={{width: '80px', borderRadius: '5px'}} />
                    <h5 className="text-capitalize mb-0">{pizza.name}</h5>
                </div>
                
                <div className="d-flex align-items-center gap-2">
                    <h5 className="mb-0 text-success">${(pizza.price * pizza.count).toLocaleString('es-CL')}</h5>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => decreaseQuantity(pizza.id)}>-</button>
                    <span className="fw-bold">{pizza.count}</span>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => increaseQuantity(pizza.id)}>+</button>
                </div>
            </div>
           ))
        )}
        
        <h3 className="mt-4">Total: ${total.toLocaleString('es-CL')}</h3>
        <button className="btn btn-dark mt-3" disabled={cart.length === 0}>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;