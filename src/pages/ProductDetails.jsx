import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/api";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
    const { id } = useParams();
    const [ car, setVehicle ] = useState(null)
    const { addToCart } = useContext(CartContext);
    



    useEffect(() => {
        const vehicleInfo = async () => {
            try {
                const data = await fetchProductById(id);
                setVehicle(data);
            } catch (error) {
                console.error("Can't load vehicle info");
            };
        }
        vehicleInfo();   
    }, [id]);
        
    if (!car) return <span>Loading, Please wait</span>

    return (
        <div>
            <div className="productDetailsImg">
                <img src={car.img} alt={`${car.year} ${car.make} ${car.model}`} />
            </div>
            <div className="productDetailsInfo">
                <div className="productDetailsInfoBoxTop">
                <h2>{car.year} {car.make} {car.model}</h2>
                <h3>Daily Rental Fee: {car.rentalPrice}</h3>
                </div>
                <div className="productDetailsInfoBox">
                    <p>
                        Number Available: {car.numberAvailable}
                    </p>
                </div>
            </div>
            <div className="productDetailsDescription">
            <p>{car.description}</p>
            </div>
            <div className="productDetailsNote">
                <h4>Please note</h4>
                <p>Shown vehicles may differ from actual vehicle, as some models have different 
                    models and features available. Color and year of vehicle are consistent with shown vehicle.</p>
            </div>
            <div className="productDetailsCart">
                <button onClick = {() => addToCart(car)}>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;