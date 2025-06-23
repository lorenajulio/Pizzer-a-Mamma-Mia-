import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from "./data/Pizza";

export const Home = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    consultarApi();
  }, []);
  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data);
  };

  return (
    <>
      <Header />

      <div className="cardMenu">
        {info.map((pizza) => (
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
