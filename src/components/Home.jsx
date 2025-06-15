import React from "react";
import "../App.css";
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from "./data/Pizza";
export const Home = () => {
  return (
    <>
      <Header />

      <div className="cardMenu">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            titulo={pizza.name}
            ingredientes={pizza.ingredients}
            precio={`$${pizza.price}`}
            img={pizza.img}
            ver="👀 Ver más"
            añadir="🛒 Añadir"
          />
        ))}
      </div>
    </>
  );
};
export default Home;
