import React from "react";
import ad2Background from "../../assets/png/Ads 2.png";
import { useLocation, useParams } from "react-router-dom";
import BillingInput from "./BillingInput";
import { cars } from "../../data";
import StarRating from "../StarRating";

const RentalSummary = () => {
  const { id } = useParams();
  const location = useLocation();
  const carFromLocation = location.state?.car;

  const car = carFromLocation || cars.find((c) => c.id === id);
  console.log(car);

  if (!car) return <div>Car not found</div>;
  return (
    <div className="bg-primary-white rounded-xl p-4">
      <div className="mb-5">
        <h2 className="font-bold mb-1 lg:text-xl">Rental Summary</h2>
        <p className="text-xs text-secondary-300 font-medium leading-5 lg:text-sm">
          Price may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 items-center">
        <div
          className="flex justify-center items-center bg-cover bg-center rounded-xl h-full"
          style={{ backgroundImage: `url(${ad2Background})` }}
        >
          <img src={car.carImage} alt="car" className="my-5" />
        </div>

        <div>
          <div>
            <h2 className="text-xl font-bold">{car.carBrand}</h2>
          </div>
          <div className="flex flex-col gap-1 mt-2 md:flex-row md:items-center ">
            <StarRating numberOfStars={5} />
            <span className="text-xs text-secondary-400 font-medium md:text-sm md:ml-1">
              440+ Reviewer
            </span>
          </div>
        </div>
      </div>
      <div className="border border-secondary-200 my-5"></div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-secondary-300 font-semibold lg:text-base">
            Subtotal
          </span>
          <span className="font-semibold">${car.price}.00</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-secondary-300 font-semibold lg:text-base">
            Tax
          </span>
          <span className="font-semibold">$0</span>
        </div>
      </div>

      <div className="my-5 relative">
        <BillingInput type="text" placeholder="Apply promo code" />
        <button className="absolute top-1/2 right-5 text-xs font-semibold lg:text-base">
          Apply now
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold mb-1 xl:text-xl">Total Rental Price</h2>
          <p className="text-xs text-secondary-300 font-medium lg:text-sm">
            Overall price rental
          </p>
        </div>
        <span className="text-xl font-bold lg:text-[2rem]">
          ${car.price}.00
        </span>
      </div>
    </div>
  );
};

export default RentalSummary;
