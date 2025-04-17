import React, { useState } from 'react';
import { Typography } from 'antd';
import './ImageAccordion.css';

const { Title } = Typography;

const vehicleTypes = [
  {
    type: 'SUV',
    count: 3,
    image: '/suv.jpg',
  },
  {
    type: 'Sedan',
    count: 5,
    image: '/sedan.jpg',
  },
  {
    type: 'Truck',
    count: 2,
    image: '/truck.jpg',
  },
  {
    type: 'Coupe',
    count: 2,
    image: '/coupe.jpg',
  },
  {
    type: 'Convertible',
    count: 1,
    image: '/convertible.jpg',
  },
];

const VehicleTypes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={styles.wrapper}>
      <Title level={1} style={styles.title}>
        Browse by Type
      </Title>

      <div className="accordion-container">
        {vehicleTypes.map((item, index) => (
          <div
            key={item.type}
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.image} alt={item.type} className="accordion-image" />
            {activeIndex === index && (
              <div className="accordion-label">
                <h3>{item.type}</h3>
                <p>{item.count} Cars</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    background: 'rgb(4, 21, 37)',
    padding: '60px 20px',
    borderRadius: '16px',
    margin: '40px 0',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: '32px',
  },
};

export default VehicleTypes;