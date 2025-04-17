import { render, screen } from "@testing-library/react";
import Checkout from "../Checkout";
import { CartContext } from "../../context/CartContext";

test("displays order summary", () => {
  const cartItems = [{ id: 1, make: "Audi", model: "R8", rentalPrice: "$699" }];

  render(
    <CartContext.Provider value={{ cart: cartItems, clearCart: jest.fn() }}>
      <Checkout />
    </CartContext.Provider>
  );

  expect(screen.getByText(/Order Summary/i)).toBeInTheDocument();
  expect(screen.getByText(/Audi R8/i)).toBeInTheDocument();
});
