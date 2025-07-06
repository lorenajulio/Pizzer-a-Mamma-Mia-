import React from "react";
import piza from "../assets/pizza.jpg";
import { useCart } from "../context/CartContext"; // Asegúrate de que la ruta sea correcta

export const CardPizza = (props) => {
  const { addToCart } = useCart();
  return (
    <div className="card mt-5">
      <img src={props.img || piza} alt={props.titulo} />
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <h6>Ingredientes:</h6>
        <ul>
          {props.ingredientes?.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </div>

      <div className="card-body">
        <p>Precio: {props.precio}</p>
        <div className="boton">
          <button className="btn btn-primary">
            <a href="#" className="card-link">
              {props.ver}
            </a>
          </button>

          <button
            className="btn btn-success"
            onClick={() =>
              addToCart({
                id: props.id,
                name: props.titulo,
                price: props.precioNum,
                img: props.img,
              })
            }
          >
            🛒 Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
