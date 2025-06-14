import React from "react";
import ad2Background from "../assets/png/Ads 2.png";
import { Link, useParams } from "react-router-dom";
import { cars } from "../data";
import Button from "./Button";
import Reviews from "./Reviews";
import { useGlobalContext } from "../context/GlobalContext";
import Filter from "./Filter";
import RecommendedCar from "./RecommendedCar";
import RecentCar from "./RecentCars";
import StarRating from "./StarRating";

const CarDetails = () => {
  const { isFilterActive } = useGlobalContext();

  const { id } = useParams();
  const car = cars.find((car) => car.id === id);

  if (!car) return <div>Car not found</div>;

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

        <div className="px-5 my-10 transition-all duration-700 opacity-100 translate-x-0 xl:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 xl:gap:7">
            <div>
              <div
                className="text-primary-white bg-cover bg-center min-h-[232px] rounded-xl w-full xl:min-h-[360px]"
                style={{ backgroundImage: `url(${ad2Background})` }}
              >
                <div className="p-4 xl:px-8 xl:py-10">
                  <p className="font-semibold xl:text-3xl xl:w-72 ">
                    Sports car with the best <br /> design and acceleration
                  </p>
                  <p className="text-xs font-medium my-3 w-52 xl:text-base xl:w-72">
                    Safety and comfort while driving a futuristic and elegant
                    sports car
                  </p>

                  <div className="mt-16 xl:ml-28 xl:mt-0 ">
                    <img
                      src={car.carImage}
                      alt="car"
                      className="w-[190px] mx-auto md:w-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-5 mt-7">
                <div className="border-2 p-0.5 rounded-xl border-primary-500">
                  <div
                    className="flex justify-center items-center bg-cover bg-center rounded-xl h-full"
                    style={{ backgroundImage: `url(${ad2Background})` }}
                  >
                    <img src={car.carImage} alt="car" className="" />
                  </div>
                </div>

                <img
                  src={car.carPreviewImages.carPreviewTwo}
                  alt=""
                  className="w-full"
                />
                <img
                  src={car.carPreviewImages.carPreviewOne}
                  alt=""
                  className="w-full"
                />
              </div>
            </div>

            <div className="bg-primary-white p-4 rounded-xl xl:p-5">
              <h2 className="font-bold text-xl xl:text-[2rem] mb-1">
                {car.carBrand}
              </h2>
              <div className="flex items-center gap-1">
                <StarRating numberOfStars={5} />

                <span className="text-xs text-secondary-300 ml-2 xl:text-sm">
                  440+ Reviewer
                </span>
              </div>
              <p className="text-secondary-300 text-xs leading-5 my-5 xl:text-xl xl:my-10 xl:leading-10">
                {car.description}
              </p>

              <div className="flex justify-between text-xs xl:text-xl">
                <div>
                  <div className="flex justify-between mb-5">
                    <span className="font-medium text-secondary-300">
                      Type Car
                    </span>
                    <span className="font-semibold">{car.carType}</span>
                  </div>
                  <div className="space-x-8">
                    <span className="font-medium text-secondary-300">
                      Steering
                    </span>
                    <span className="font-semibold">
                      {car.specs.transmission.value}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="space-x-8 mb-5">
                    <span className="font-medium text-secondary-300">
                      Capacity
                    </span>
                    <span className="font-semibold">
                      {car.specs.users.value}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-secondary-300">
                      Gasoline
                    </span>
                    <span className="font-semibold">
                      {car.specs.fuel.value}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-16">
                <div>
                  <span className="font-bold text-xl xl:text-[1.4rem]">
                    ${car.price}.00/
                  </span>
                  <span className="text-xs text-secondary-300 ml-1 xl:text-base">
                    day
                  </span>
                  <div className="text-xs font-medium text-secondary-300 mt-2 xl:text-base">
                    ${car.slashedPrice}.00
                  </div>
                </div>
                <Link to={`/car/${car.id}/rent`}>
                  <Button
                    text="Rent Now"
                    className="font-semibold text-base px-10 py-4"
                  />
                </Link>
              </div>
            </div>
          </div>
          <Reviews />
          {/* <div className="mt-10 ">
            <RecentCar />
            <RecommendedCar />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
