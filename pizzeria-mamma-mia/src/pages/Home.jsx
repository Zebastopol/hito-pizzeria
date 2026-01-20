import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';       // <-- Ruta corregida
import CardPizza from '../components/CardPizza'; // <-- Ruta corregida
import { CartContext } from '../context/CartContext'; // <-- Importamos context

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext); // <-- Consumimos función añadir

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const url = "http://localhost:5000/api/pizzas";
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                //se pasa la info completa de la pizza para añadir al carrito
                handleAdd={() => addToCart(pizza)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;