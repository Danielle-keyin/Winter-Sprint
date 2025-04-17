import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [submitted, setSubmitted] = useState(false);

  const TAX_RATE = 0.15; // eww tax

  const subtotal = cart.reduce((sum, car) => {
    const price = parseFloat(car.rentalPrice.replace("$", "")) || 0;
    return sum + price;
  }, 0);

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      {submitted ? (
        <div className="confirmation">
          <h2>✅ Order Confirmed!</h2>
          <p>Thanks for renting with us. Your car(s) will be ready soon!</p>
        </div>
      ) : (
        <>
          <h2>Order Summary</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="checkout-list">
                {cart.map((car, index) => (
                  <li key={index}>
                    {car.make} {car.model} - {car.rentalPrice}
                  </li>
                ))}
              </ul>
              <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
              <p className="tax">Tax (15%): ${tax.toFixed(2)}</p>
              <p className="total">Total: ${total.toFixed(2)}</p>

              <form className="checkout-form" onSubmit={handleSubmit}>
                <h3>Customer Info</h3>
                <input type="text" required placeholder="Full Name" />
                <input type="email" required placeholder="Email" />
                <input type="text" required placeholder="Credit Card (fake)" />
                <button type="submit">Confirm Checkout</button>
              </form>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
