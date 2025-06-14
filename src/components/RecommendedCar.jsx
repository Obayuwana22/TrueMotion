import CarCard from "./CarCard";
import Button from "./Button";
import { cars } from "../data";

const RecommendedCar = () => {
  return (
    <div className="mt-3">
      <div className="text-sm text-secondary-300 font-semibold mb-5 xl:ml-5">
        Recommendation Car
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-10">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div className="flex justify-center my-16">
        <Button text="Show More Cars" />
      </div>
    </div>
  );
};
export default RecommendedCar;
