import React from "react";
import user from "../assets/png/user.png";
import arrowDown from "../assets/svg/gray-arrow-down.svg";
import star from "../assets/svg/star.svg";
import emptyStar from "../assets/svg/empty-star.svg";

const Reviews = () => {
  return (
    <div className="bg-primary-white mt-10 p-4 rounded-xl">
      <div>
        <div className="flex items-center gap-5 mb-5">
          <h2 className="text-xl font-semibold">Reviews</h2>
          <div className="bg-primary-500 px-3 py-1 rounded text-primary-white text-sm font-bold">
            13
          </div>
        </div>

        <div className="text-secondary-300 text-xs space-y-5">
          <div className="flex">
            <img
              src={user}
              alt=""
              className="w-11  h-full mr-2 xl:w-14 xl:mr-3"
            />

            <div className="w-full">
              <div className="flex justify-between mb-5">
                <div>
                  <h3 className="font-semibold text-secondary-500 text-base mb-1 xl:text-xl">
                    Alex Stanton
                  </h3>
                  <div>CEO at Bukalapak</div>
                </div>

                <div className="flex flex-col justify-between mt-1.5">
                  <div className="font-medium text-right">21 July 2022</div>
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={emptyStar} alt="" />
                  </div>
                </div>
              </div>

              <p className="leading-5">
                We are very happy with the service from the MORENT App. Morent
                has a low price . . .
              </p>
            </div>
          </div>

          <div className="flex gap-2 justify-center mt-10 font-medium text-sm">
            <span>Show All </span>
            <img src={arrowDown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
