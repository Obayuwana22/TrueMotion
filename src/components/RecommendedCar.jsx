import RecommendedCarCard from "./RecommendedCarCard";
import Button from "./Button";

const RecommendedCar = () => {
  return (
    <div>
      <div className="text-sm text-secondary-300 font-semibold">
        Recommendation Car
      </div>
      <div className="">
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
