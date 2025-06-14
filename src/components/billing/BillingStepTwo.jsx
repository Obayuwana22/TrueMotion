import React from "react";
import BillingInput from "./BillingInput";
import pickUp from "../../assets/svg/Mark.svg";
import dropOff from "../../assets/svg/Mark (1).svg";

const BillingStepTwo = () => {
  return (
    <div className="bg-primary-white rounded-xl p-4">
      <div>
        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <h2 className="font-bold mb-1 lg:text-xl">Rental Info</h2>
            <span className="text-xs text-secondary-300 font-medium lg:text-sm">
              Step 2 of 4
            </span>
          </div>
          <p className="text-xs text-secondary-300 font-medium lg:text-sm">
            Please select your rental date
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-7">
          <div className="flex items-center gap-2">
            <img src={pickUp} alt="" />
            <h2 className="font-semibold mb-1">Pick - Up</h2>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-col gap-4 w-full">
              <BillingInput
                label="Location"
                type="select"
                options={[
                  { value: "", text: "Select your city" },
                  { value: "apple", text: "Apple" },
                  { value: "banana", text: "Banana" },
                ]}
              />
              <BillingInput
                label="Time"
                type="time"
                placeholder="Select your time"
              />
            </div>
            <div className="w-full">
              <BillingInput
                label="Date"
                type="date"
                placeholder="Select your date"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-7">
          <div className="flex items-center gap-2">
            <img src={dropOff} alt="" />
            <h2 className="font-semibold mb-1">Drop - Off</h2>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-col gap-4 w-full">
              <BillingInput
                label="Location"
                type="select"
                options={[
                  { value: "", text: "Select your city" },
                  { value: "apple", text: "Apple" },
                  { value: "banana", text: "Banana" },
                ]}
              />
              <BillingInput
                label="Time"
                type="time"
                placeholder="Select your time"
              />
            </div>
            <div className="w-full">
              <BillingInput
                label="Date"
                type="date"
                placeholder="Select your date"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingStepTwo;
