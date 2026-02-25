import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const url = `${apiUrl}/api/pizzas`;
      
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
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
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