//ARTEM HANZHA
import HeroSection from '../components/HomePage/HeroSection';
import Brands from '../components/HomePage/Brands';
import VehicleTypes from '../components/HomePage/VehicleTypes';
import WhyChooseUs from '../components/HomePage/WhyChooseUs';
import ReservationsTable from '../components/HomePage/ReservationsTable';
import TeamSection from '../components/HomePage/TeamSection';

const Home = () => {
  return (
    <div style={{ padding: '24px' }}>
      <HeroSection />
      <Brands/>
      <VehicleTypes/>
      <WhyChooseUs/>
      <ReservationsTable/>
      <TeamSection/>
    </div>
  );
};
export default Home;