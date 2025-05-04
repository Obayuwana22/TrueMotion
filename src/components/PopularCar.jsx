import PopularCarCard from "./PopularCarCard";

const PopularCar = () => {
  return (
    <div>
      <div className="flex items-center justify-between font-semibold">
        <div className="text-sm text-secondary-300">Popular Car</div>
        <div className="text-xs text-primary-500">View All</div>
      </div>
      <div className="relative">
        <div className="flex gap-5 overflow-auto scrollbar-hide">
          <PopularCarCard />
          <PopularCarCard />
          <PopularCarCard />
          <PopularCarCard />
        </div>
        <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
export default PopularCar;
