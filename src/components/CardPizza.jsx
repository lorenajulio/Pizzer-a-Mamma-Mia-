import React from "react";
import piza from "../assets/pizza.jpg";

export const CardPizza = (props) => {
  return (
    <div class="card mt-5">
      <img src={piza} alt="" />
      <div className="card-body ">
        <h5 className="card-title">{props.titulo}</h5>
        <h6>Ingredientes:</h6>
        <p className="card-text">{props.ingredientes}</p>
      </div>

      <div className="card-body">
        <p>Precio: {props.precio}</p>
        <div className="boton">
          <button className=" btn btn-primary">
            <a href="#" className="card-link">
              {props.ver}
            </a>
          </button>

          <button className=" btn btn-success">
            <a href="#" className="card-link">
              {props.añadir}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardPizza;
