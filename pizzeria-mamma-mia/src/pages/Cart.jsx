import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
  const { token } = useContext(UserContext); 
  const [mensaje, setMensaje] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleCheckout = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/checkouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({ cart })
      });

      if (response.ok) {
        setMensaje("¡Compra realizada con éxito! 🍕");
      } else {
        setMensaje("Error al procesar la compra.");
      }
    } catch (error) {
      console.error(error);
      setMensaje("Error de conexión.");
    }
  };

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
        
        {mensaje && <div className="alert alert-success mt-3">{mensaje}</div>}
        
        <button className="btn btn-dark mt-3" disabled={!token || cart.length === 0} onClick={handleCheckout}>
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;