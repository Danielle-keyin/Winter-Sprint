import { Typography, Button } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay} />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={styles.content}
      >
        <Title level={1} style={styles.title}>
          Find cars for rent near you
        </Title>
        <Paragraph style={styles.subtitle}>
          A vehicle for every lifestyle today
        </Paragraph>
        <Button type="primary" size="large" style={styles.button}>
          Browse Cars
        </Button>
      </motion.div>
    </div>
  );
};

const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    backgroundImage: 'url("/topimg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '60px',
    color: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '600px',
  },
  title: {
    fontSize: '48px',
    color: '#fff',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#ddd',
    marginBottom: '24px',
  },
  button: {
    backgroundColor: '#3897f6',
    borderColor: '#3897f6',
    fontWeight: 'bold',
    padding: '0 32px',
    height: '45px',
  },
};

export default HeroSection;