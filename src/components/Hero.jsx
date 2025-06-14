import { Link } from "react-router-dom";
import Button from "./Button";
import { cars } from "../data";

const Hero = () => {
  return (
    <div className="md:flex md:gap-5 xl:gap-10">
      {cars.slice(0, 2).map((car, i) => (
        <div
          key={car.id}
          className={`text-primary-white bg-cover bg-center min-h-[232px] rounded w-full xl:min-h-[360px] ${
            i === 1 && "hidden md:block"
          }`}
          style={{ backgroundImage: `url(${car.backDrop})` }}
        >
          <div className="p-4">
            <p className="font-semibold xl:text-3xl xl:w-72 ">
              {car.adsHeader}
            </p>
            <p className="text-xs font-medium my-3 leading-6 w-52 xl:text-base xl:w-72">
              {car.adsDescription}
            </p>

            <Link to={`/car/${car.id}`}>
              <Button
                text="Rental car"
                className={`font-semibold text-xs py-3 px-8 xl:px-5 xl:py-3 xl:mt-2 xl:text-base ${
                  i === 1 ? "!bg-information-500" : ""
                }`}
              />
            </Link>

            <div className="mt-5 ml-10 xl:ml-28 xl:mt-0 ">
              <img src={car.carImage} alt="image of a car" />
            </div>
          </div>
        </div>
      ))}

      {/* <div
        className="hidden md:block text-primary-white bg-cover bg-center min-h-[232px] rounded w-full xl:min-h-[360px]"
        style={{ backgroundImage: `url(${ad2Background})` }}
      >
        <div className="p-4">
          <p className="font-semibold xl:text-3xl xl:w-72">
            Easy way to rent a car at a low price
          </p>
          <p className="text-xs font-medium my-3 leading-6 w-52 xl:text-base xl:w-72">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <Button
            text="Rental car"
            className="!bg-information-500 font-semibold text-xs py-3 px-8 xl:px-5 xl:py-3 xl:mt-2 xl:text-base"
          />
          <div className="mt-5 ml-10 xl:ml-28 xl:mt-0 ">
            <img src={secondCar} alt="car" className="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Hero;
