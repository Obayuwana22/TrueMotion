import Ads from "./Ads";
import Footer from "./Footer";
import PopularCar from "./PopularCar";
import RentalCycle from "./RentalCycle";
import SwapBtn from "./SwapBtn";

const Landing = () => {
  return (
    <div>
      <Ads />
      <div className="relative">
        <RentalCycle />
        <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">
          <SwapBtn />
        </div>
      </div>
      <PopularCar />
      <Footer />
    </div>
  );
};
export default Landing;
