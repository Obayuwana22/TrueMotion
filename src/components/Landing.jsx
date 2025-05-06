import Footer from "./Footer";
import Hero from "./Hero";
import PopularCar from "./PopularCar";
import RecommendedCar from "./RecommendedCar";
import RentalCycle from "./RentalCycle";

const Landing = () => {
  return (
    <div>
      <Hero />
      <div>
        <RentalCycle />
      </div>
      <div>
        <PopularCar />
      </div>
      <div className="mt-3">
        <RecommendedCar />
      </div>
      <Footer />
    </div>
  );
};
export default Landing;
