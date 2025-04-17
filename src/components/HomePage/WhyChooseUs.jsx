import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import {
  DollarOutlined,
  SafetyCertificateOutlined,
  FileSearchOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const features = [
  {
    icon: <DollarOutlined />,
    title: 'Special Financing Offers',
    description: 'Flexible options to fit any budget.',
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: 'Trusted Car Dealership',
    description: 'Years of experience with top reviews.',
  },
  {
    icon: <FileSearchOutlined />,
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprises.',
  },
  {
    icon: <ToolOutlined />,
    title: 'Expert Car Service',
    description: 'Certified mechanics & quick support.',
  },
];

const WhyChooseUs = () => {
  return (
    <div style={styles.wrapper}>
      <Title level={3} style={styles.title}>Why Choose Us?</Title>
      <Row gutter={[24, 24]} justify="start">
        {features.map((item, i) => (
          <Col xs={24} sm={12} md={12} lg={6} key={item.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card
                hoverable
                className="why-card"
                style={styles.card}
                bodyStyle={styles.cardBody}
              >
                <div style={styles.icon}>{item.icon}</div>
                <h4 style={styles.cardTitle}>{item.title}</h4>
                <Paragraph style={styles.cardText}>{item.description}</Paragraph>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '60px 20px',
    margin: '40px 0',
  },
  title: {
    textAlign: 'left',
    marginBottom: '32px',
  },
  card: {
    borderRadius: '12px',
    minHeight: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  cardBody: {
    textAlign: 'center',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  icon: {
    fontSize: '32px',
    color: '#3897f6',
    marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  cardText: {
    color: '#666',
    fontSize: '14px',
    margin: 0,
  },
};

export default WhyChooseUs;