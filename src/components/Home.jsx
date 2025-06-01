import React from "react";
import "../App.css";
import Header from "./Header";
import CardPizza from "./CardPizza";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="cardMenu">
        <CardPizza
          titulo="Pizza Napolitana"
          ingredientes="Mozarrrella, tomate, jamon, oregano"
          precio="$5950"
          ver="👀Ver mas"
          añadir="🛒Añadir"
        />
        <CardPizza
          titulo="Pizza Española "
          ingredientes="Mozarrrella, gorgonzola, parmesano, provolone"
          precio="$6950"
          ver="👀Ver mas"
          añadir="🛒Añadir"
        />
        <CardPizza
          titulo="Pizza Pepperoni "
          ingredientes="Mozarrrella,pepperoni, oregano"
          precio="$6950"
          ver="👀Ver mas"
          añadir="🛒Añadir"
        />
      </div>
    </>
  );
};
export default Home;
