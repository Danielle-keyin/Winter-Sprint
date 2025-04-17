import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Your Cart 🛒</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((car) => (
              <li key={car.id} className="cart-item">
                <img src={car.img} alt={car.make} />
                <div>
                  <h3>
                    {car.make} {car.model}
                  </h3>
                  <p>{car.rentalPrice} / day</p>
                  <button onClick={() => removeFromCart(car.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          {cart.length > 0 && (
            <div style={{ marginTop: "24px", textAlign: "center" }}>
              <Link to="/checkout">
                <button className="checkout-btn">Proceed to Checkout</button>
              </Link>
            </div>
          )}

          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
