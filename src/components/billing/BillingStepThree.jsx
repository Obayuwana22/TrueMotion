import React from "react";
import BillingInput from "./BillingInput";
import pickUp from "../../assets/svg/Mark.svg";
import visa from "../../assets/png/visa.png";
import mc from "../../assets/png/mc.png";
import paypal from "../../assets/png/paypal.png";
import bitcoin from "../../assets/png/bitcoin.png";

const BillingStepThree = () => {
  return (
    <div className="bg-primary-white rounded-xl p-4">
      <div>
        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <h2 className="font-bold lg:text-xl">Payment Method</h2>
            <span className="text-xs text-secondary-300 font-medium lg:text-sm">
              Step 3 of 4
            </span>
          </div>
          <p className="text-xs text-secondary-300 font-medium lg:text-sm">
            Please enter your Payment method
          </p>
        </div>

        <div className="bg-gray-background p-4 rounded-xl">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <img src={pickUp} alt="" />
              <h3 className="font-semibold">Credit Card</h3>
            </div>
            <div className="flex items-center gap-3">
              <img src={visa} alt="" />
              <img src={mc} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-col gap-4 w-full">
              <BillingInput
                label="Card Number"
                type="text"
                placeholder="Card number"
                className="bg-primary-white"
              />
              <BillingInput
                label="Card Holder"
                type="text"
                placeholder="Card holder"
                className="bg-primary-white"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <BillingInput
                label="Expiration Date"
                type="date"
                placeholder=""
                className="bg-primary-white"
              />
              <BillingInput
                label="CVC"
                type="number"
                placeholder="CVC"
                className="bg-primary-white"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {/* <BillingInput type="radio" placeholder="CVC"  /> */}
          {/* <BillingInput type="radio" placeholder="CVC" /> */}
          <div className="flex justify-between bg-gray-background rounded-xl p-5">
            <div className="flex gap-2 lg:gap-5">
              <input type="radio" name="" id="" />
              <div className="text-sm font-semibold lg:text-base">Paypal</div>
            </div>
            <img src={paypal} alt="" />
          </div>

          <div className="flex justify-between bg-gray-background rounded-xl p-5">
            <div className="flex gap-2 lg:gap-5">
              <input type="radio" name="" id="" />
              <div className="text-sm font-semibold lg:text-base">Bitcoin</div>
            </div>

            <img src={bitcoin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingStepThree;
