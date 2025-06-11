import unlike from "../assets/svg/unlike.svg";
import redLike from "../assets/svg/red-like.svg";
import { useState } from "react";
import Button from "./Button";

const CarCard = ({ car }) => {
  const [isLiked, setIsLiked] = useState(false);

  if (!car) return null;

  const handleLikeClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsLiked((prev) => !prev);
  };

  return (
    <div>
      <div className="flex flex-col justify-between shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded p-5 xl:min-w-[304px] ">
        <div>
          <div className="flex justify-between">
            <div className="font-semibold text-secondary-500">
              {car.carBrand}
            </div>
             <button onClick={handleLikeClick} aria-label={isLiked ? "Unlike" : "Like"} className="cursor-pointer">
              <img src={isLiked ? redLike : unlike} alt="heart icon" className="pointer-events-none" />
            </button>
          </div>
          <span className="font-medium text-xs text-secondary-300">
            {car.carType}
          </span>
        </div>

        <div className="flex justify-between mt-2 xl:flex-col">
          <div className="relative w-[150px]  flex items-end xl:w-auto xl:my-14">
            <img src={car.carImage} alt="image of a car" />
            {/* <div className="absolute bottom-0 left-0 h-5 w-full z-10 bg-gradient-to-t from-white/80 to-transparent pointer-events-none " /> */}
          </div>

          <div className="flex flex-col gap-3 xl:flex-row xl:justify-between font-medium text-secondary-300 text-xs ">
            <div className="flex gap-1">
              <img src={car.specs.fuel.icon} alt="Fuel icon" />
              <span>{car.specs.fuel.value}</span>
            </div>
            <div className="flex gap-1">
              <img src={car.specs.transmission.icon} alt="Transmission icon" />
              <span>{car.specs.transmission.value}</span>
            </div>
            <div className="flex gap-1">
              <img src={car.specs.users.icon} alt="User icon" />
              <span>{car.specs.users.value}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <div>
            <span className="font-bold">${car.price}/</span>
            <span className="text-xs text-secondary-300 ml-1">day</span>
            <div className="text-xs font-medium text-secondary-300">$80.00</div>
          </div>
          <Button text="Rent Now" />
        </div>
      </div>
    </div>
  );
};
export default CarCard;
