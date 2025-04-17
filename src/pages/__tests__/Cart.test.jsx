import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import { CartContext } from "../../context/CartContext";

test("displays empty cart message", () => {
  render(
    <CartContext.Provider
      value={{ cart: [], removeFromCart: jest.fn(), clearCart: jest.fn() }}
    >
      <Cart />
    </CartContext.Provider>
  );
  expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
});
