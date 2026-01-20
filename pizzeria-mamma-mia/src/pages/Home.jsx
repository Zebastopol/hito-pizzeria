import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  // Estado para guardar las pizzas de la API
  const [pizzas, setPizzas] = useState([]);

  // useEffect para consumir la API al montar el componente
  useEffect(() => {
    // Lógica para consumir la API y actualizar el estado de pizzas
    consultarApi();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  const consultarApi = async () => {
    try {
      const url = "http://localhost:5000/api/pizzas";
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data); // Actualiza el estado con las pizzas obtenidas de la API
    } catch (error) {
      console.error('Error al consultar la API de pizzas:', error);
    }
  };
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row p-3 g-4 d-flex justify-content-center">
            {/* Renderización Dinámica de Pizzas */}
            {pizzas.map((pizza) => (
                <div className="flex col-12 col-md-4" key={pizza.id}>
                    <CardPizza
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        desc={pizza.desc}
                        img={pizza.img}
                    />
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
