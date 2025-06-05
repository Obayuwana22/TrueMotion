import Hero from "./Hero";
import PopularCar from "./PopularCar";
import RecommendedCar from "./RecommendedCar";
import RentalCycle from "./RentalCycle";
import Filter from "./Filter";
import FilterCars from "./FilterCars";
import { useGlobalContext } from "../context/GlobalContext";

const Landing = () => {
  const { isFilterActive } = useGlobalContext();

  return (
    <div>
      <div className={`${isFilterActive ? "lg:flex" : ""}`}>
        <div
          className={`px-5 lg:px-0 transform transition-transform duration-300 ${
            isFilterActive ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Filter />
        </div>
        {isFilterActive ? (
          <div className="lg:flex-1 px-5 xl:px-12 transition-all duration-700 opacity-100 translate-x-0 ">
            <RentalCycle />
            <FilterCars />
          </div>
        ) : (
          <div className="xl:mt-10 px-5 xl:px-12 transition-all duration-700 opacity-100 translate-x-0">
            <Hero />
            <RentalCycle />
            <PopularCar />
            <RecommendedCar />
          </div>
        )}
      </div>
    </div>
  );
};
export default Landing;
