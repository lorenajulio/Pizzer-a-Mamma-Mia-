import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { token } = useUser();
  const { cart, addToCart, removeFromCart, total } = useCart();

  return (
    <div className="container mt-4">
      <h3>Tu carrito:</h3>
      {cart.map((pizza) => (
        <div key={pizza.id} className="d-flex justify-content-between mb-3">
          <span>{pizza.name}</span>
          <div>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => removeFromCart(pizza.id)}
            >
              -
            </button>
            <span className="mx-2">{pizza.count}</span>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => addToCart(pizza)}
            >
              +
            </button>
          </div>
          <span>${(pizza.price * pizza.count).toLocaleString()}</span>
        </div>
      ))}
      <h4>Total: ${total.toLocaleString()}</h4>
      <button className="btn btn-dark mt-2" disabled={!token}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;
