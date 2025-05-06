import RecommendedCarCard from "./RecommendedCarCard";
import Button from "./Button";

const RecommendedCar = () => {
  return (
    <div>
      <div className="text-sm text-secondary-300 font-semibold mb-5">
        Recommendation Car
      </div>
      <div className="md:flex md:flex-wrap md:gap-5 xl:gap-10 ">
        <RecommendedCarCard />
        <RecommendedCarCard />
        <RecommendedCarCard />
        <RecommendedCarCard />
        <RecommendedCarCard />
        <RecommendedCarCard />
        <RecommendedCarCard />
        <RecommendedCarCard />
      </div>
      <div className="flex justify-center mt-10">
        <Button text="Show More Cars" />
      </div>
    </div>
  );
};
export default RecommendedCar;
