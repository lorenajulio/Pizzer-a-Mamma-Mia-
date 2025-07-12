import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const obtenerPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener la pizza");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerPizza();
  }, [id]); // 🔸 ejecuta el fetch cada vez que cambia el id

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="container mt-5">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} style={{ width: "300px" }} />
      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <h4>Precio: ${pizza.price}</h4>
    </div>
  );
};
