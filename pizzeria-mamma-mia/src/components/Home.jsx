import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../utils/pizzas';

const Home = () => {
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
