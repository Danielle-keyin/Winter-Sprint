import React from 'react';
import { Input, Button, Typography, Divider, Space } from 'antd';
import {
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.topSection}>
        <div style={styles.left}>
          <Title level={4} style={styles.joinTitle}>Join us</Title>
          <Text style={styles.subText}>
            Receive pricing updates, shopping tips & more!
          </Text>
        </div>

        <div style={styles.right}>
          <Input.Group compact>
            <Input
              style={styles.input}
              placeholder="Enter your email"
            />
            <Button type="primary" style={styles.button}>
              Submit
            </Button>
          </Input.Group>
        </div>
      </div>
      <Divider style={styles.divider} />

      <div style={styles.bottomSection}>
        <Space size="large">
          <a href="#"><InstagramOutlined className="footer-icon" /></a>
          <a href="#"><LinkedinOutlined className="footer-icon" /></a>
          <a href="#"><TwitterOutlined className="footer-icon" /></a>
        </Space>

        <div style={{ marginTop: '16px' }}>
          <Text type="secondary" style={{ fontSize: '13px' }}>
            © {new Date().getFullYear()} Rentify. All rights reserved.
          </Text>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '60px 20px 30px',
    backgroundColor: '#f8f8f8',
    borderRadius: '16px 16px 0 0',
    marginTop: '60px',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    rowGap: '20px',
    marginBottom: '30px',
  },
  left: {
    flex: 1,
    minWidth: '250px',
  },
  joinTitle: {
    marginBottom: '8px',
    fontWeight: 700,
    fontSize: '20px',
  },
  subText: {
    fontSize: '14px',
    color: '#666',
  },
  right: {
    flex: 1,
    textAlign: 'right',
    minWidth: '250px',
  },
  input: {
    width: '70%',
    borderRadius: '6px 0 0 6px',
  },
  button: {
    borderRadius: '0 6px 6px 0',
  },
  divider: {
    borderColor: '#ddd',
    margin: '30px 0',
  },
  bottomSection: {
    textAlign: 'center',
  },
};

export default Footer;