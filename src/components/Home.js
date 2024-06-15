import { Banner } from "../components/Banner";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  return (
    <div className="home_main-container">
      <Banner />
      <RestaurantList />
    </div>
  );
};

export default Home;
