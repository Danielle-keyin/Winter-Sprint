import { render, screen } from "@testing-library/react";
import { CartContext } from "../../context/CartContext";
import Cars from "../cars";

test("renders All Cars heading", () => {
  render(
    <CartContext.Provider value={{ cart: [], addToCart: jest.fn() }}>
      <Cars />
    </CartContext.Provider>
  );
  const heading = screen.getByText(/All Cars/i);
  expect(heading).toBeInTheDocument();
});
