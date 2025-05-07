import { nanoid } from "nanoid";
import car from "../assets/png/image 7.png";
import gasStation from "../assets/svg/gas-station.svg";
import carGearType from "../assets/svg/Car-gear-type.svg";
import users from "../assets/svg/profile-2user.svg";
import unlike from "../assets/svg/unlike.svg";
import redLike from "../assets/svg/red-like.svg";
import { useState } from "react";
import Button from "./Button";

const RecommendedCarCard = () => {
  const [isLiked, setIsLiked] = useState(false);

  const carData = [
    { id: nanoid(), icon: gasStation, description: "90L" },
    { id: nanoid(), icon: carGearType, description: "Manual" },
    {
      id: nanoid(),
      icon: users,
      description: "2 People",
      alt: "number of users",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-between my-5 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded p-5 md:my-0">
        <div>
          <div className="flex justify-between">
            <div className="font-semibold text-secondary-500">All New Rush</div>
            <div onClick={() => setIsLiked(!isLiked)}>
              {isLiked ? (
                <img src={redLike} alt="liked icon" />
              ) : (
                <img src={unlike} alt="unliked icon" />
              )}
            </div>
          </div>
          <span className="font-medium text-xs text-secondary-300">SUV</span>
        </div>
        <div className="block xl:hidden">
          <div className="flex justify-between items-end mt-2">
            <div className="w-[150px]">
              <img src={car} alt="image of a car" />
            </div>
            <div className="flex flex-col gap-3 font-medium text-secondary-300 text-xs">
              {carData.map((item) => (
                <div key={item.id} className="flex gap-1 ">
                  <img
                    src={item.icon}
                    alt={item.alt ? item.alt : item.description}
                  />
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div>
              <span className="font-bold">$99.00/</span>
              <span className="text-xs text-secondary-300 ml-1">day</span>
              <div className="text-xs font-medium text-secondary-300">
                $80.00
              </div>
            </div>
            <Button text="Rent Now" />
          </div>
        </div>

        <div className="mt-5 mb-10 relative hidden xl:block">
          <img src={car} alt="image of a car" />
          <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white/80 to-transparent pointer-events-none" />
        </div>
        <div className="hidden xl:block">
          <div className="flex justify-between font-medium text-secondary-300 text-xs">
            {carData.map((item) => (
              <div key={item.id} className="flex gap-1">
                <img
                  src={item.icon}
                  alt={item.alt ? item.alt : item.description}
                />
                <span>{item.description}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-7">
            <div>
              <div className="font-bold">
                <span>$99.00/</span>
                <span className="text-xs text-secondary-300 ml-1">day</span>
              </div>
              {/* <div className="font-medium text-xs text-secondary-300 mt-1">$80.00</div> */}
            </div>
            <Button text="Rent Now" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecommendedCarCard;
