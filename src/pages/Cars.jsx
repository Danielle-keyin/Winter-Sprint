import { useEffect, useState, useContext } from "react";
import "./Cars.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCar, setSelectedCar] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filterType = searchParams.get("type");

  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:3001/cars");
        const data = await response.json();
        setCars(data);

        const brandList = ["All", ...new Set(data.map((car) => car.make))];
        setBrands(brandList);

        if (filterType) {
          const filtered = data.filter(
            (car) =>
              car.type &&
              filterType &&
              car.type.toLowerCase() === filterType.toLowerCase()
          );
          setFilteredCars(filtered);
          setSelectedBrand("All");
        } else {
          setFilteredCars(data);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, [filterType]);

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    setFilteredCars(
      brand === "All" ? cars : cars.filter((car) => car.make === brand)
    );
  };

  const handleViewDetails = (car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>All Cars</h1>
      <br />

      {/* Cart Prevview */}
      <div style={{ marginBottom: "24px" }}>
        <h2>🛒 Cart ({cart.length} items)</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.make} {item.model}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      {cart.length > 0 && (
        <Link to="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      )}
      {/* Filter Dropdown */}
      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="brand-select" style={{ marginRight: "8px" }}>
          Filter by brand:
        </label>
        <select
          id="brand-select"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Car Cards Grid */}
      <div className="car-grid">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <img
              src={car.img}
              alt={`${car.make} ${car.model}`}
              className="car-img"
            />
            <h3>
              {car.make} {car.model}
            </h3>
            <p>
              <strong>Year:</strong> {car.year}
            </p>
            <p>
              <strong>Price:</strong> {car.rentalPrice} / day
            </p>
            <p>
              <strong>Available:</strong> {car.numberAvailable}
            </p>
            <div className="button-group">
              <button
                className="details-btn"
                onClick={() => handleViewDetails(car)}
              >
                View Details
              </button>
              <button className="details-btn" onClick={() => addToCart(car)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link to="/checkout">
        <button className="checkout-btn">Proceed to Checkout</button>
      </Link>

      {/*Details */}
      {selectedCar && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <img
              src={selectedCar.img}
              alt={selectedCar.make}
              className="modal-img"
            />
            <h2>
              {selectedCar.make} {selectedCar.model}
            </h2>
            <p>
              <strong>Year:</strong> {selectedCar.year}
            </p>
            <p>
              <strong>Rental Price:</strong> {selectedCar.rentalPrice} / day
            </p>
            <p>
              <strong>Description:</strong> {selectedCar.description}
            </p>
            <p>
              <strong>Available:</strong> {selectedCar.numberAvailable}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cars;
