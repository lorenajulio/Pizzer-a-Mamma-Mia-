import React, { useState } from "react";
import pizzasData from "./data/Pizza";

export const Cart = () => {
  const [cartItems, setCartItems] = useState(
    pizzasData.map((pizza) => ({
      ...pizza,
      count: Number(pizza.count) || 1,
    }))
  );

  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.count),
    0
  );

  const aumentarCantidad = (id) => {
    const actualizado = cartItems.map((item) =>
      item.id === id ? { ...item, count: Number(item.count) + 1 } : item
    );
    setCartItems(actualizado);
  };

  const disminuirCantidad = (id) => {
    const actualizado = cartItems.map((item) =>
      item.id === id && item.count > 1
        ? { ...item, count: Number(item.count) - 1 }
        : item
    );
    setCartItems(actualizado);
  };

  return (
    <div className="container mt-4">
      <h3>Detalles del pedido:</h3>
      {cartItems.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center mb-3 border-bottom pb-2"
        >
          <img
            src={pizza.img}
            alt={pizza.name}
            width={80}
            height={80}
            className="me-3"
          />
          <div className="flex-grow-1">
            <strong>{pizza.name}</strong>
          </div>
          <span className="me-3">${Number(pizza.price).toLocaleString()}</span>
          <div className="btn-group">
            <button
              className="btn btn-outline-danger"
              onClick={() => disminuirCantidad(pizza.id)}
            >
              –
            </button>
            <span className="mx-2">{pizza.count}</span>
            <button
              className="btn btn-outline-primary"
              onClick={() => aumentarCantidad(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <h4>Total: ${total.toLocaleString()}</h4>
      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  );
};

export default Cart;
