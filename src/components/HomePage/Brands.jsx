import React from 'react';
import { Card, Col, Row, Typography, Button } from 'antd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const brands = [
  { name: 'BMW', image: '/b2.png' },
  { name: 'Mercedes-Benz', image: '/b4.png' },
  { name: 'Ford', image: '/b3.png' },
  { name: 'Volkswagen', image: '/b6.png' },
  { name: 'Peugeot', image: '/b5.png' },
  { name: 'Audi', image: '/b1.png' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Brands = () => {
  return (
    <div style={{ padding: '40px 0' }}>
      <Title level={3} style={{ textAlign: 'start', marginBottom: '32px' }}>
        Explore Our Premium Brands
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {brands.map((brand, i) => (
          <Col xs={12} sm={8} md={6} lg={4} key={brand.name}>
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card
                hoverable
                className="brand-card"
                cover={
                  <img
                    alt={brand.name}
                    src={brand.image}
                    className="brand-logo"
                  />
                }
              >
                <div className="brand-name">{brand.name}</div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link to="/cars">
          <Button type="primary" size="large" className="explore-button">
            Explore More
          </Button>
        </Link>
      </div>
    </div>
  );
};


export default Brands;
