import React from "react";
import BillingInput from "./BillingInput";

const BillingStepOne = () => {
  return (
    <div className="bg-primary-white rounded-xl p-4">
      <div>
        <div className="mb-5">
          <div className="flex justify-between">
            <h2 className="font-bold mb-1 lg:text-xl">Billing Info</h2>
            <span className="text-xs text-secondary-300 font-medium lg:text-sm">
              Step 1 of 4
            </span>
          </div>
          <p className="text-xs text-secondary-300 font-medium lg:text-sm">
            Please enter your billing info
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
          <div className="flex flex-col gap-4 ">
            <BillingInput label="Name" type="text" placeholder="Your name" />
            <BillingInput label="Address" type="text" placeholder="Address" />
          </div>
          <div className="flex flex-col gap-4 ">
            <BillingInput
              label="Phone Number"
              type="number"
              placeholder="Phone number"
            />
            <BillingInput
              label="Town / City"
              type="text"
              placeholder="Town or city"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingStepOne;
