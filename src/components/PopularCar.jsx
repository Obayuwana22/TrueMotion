import PopularCarCard from "./PopularCarCard";

const PopularCar = () => {
  return (
    <div>
      <div className="flex items-center justify-between font-semibold">
        <div className="text-sm text-secondary-300">Popular Car</div>
        <div className="text-xs text-primary-500">View All</div>
      </div>
      <div className="flex gap-5 overflow-auto scrollbar-hide">
        <PopularCarCard />
        <PopularCarCard />
        <PopularCarCard />
        <PopularCarCard />
      </div>
    </div>
  );
};
export default PopularCar;
