import React from "react";
import RentalSummary from "./RentalSummary";
import BillingStepOne from "./BillingStepOne";
import BillingStepTwo from "./BillingStepTwo";
import BillingStepThree from "./BillingStepThree";
import BillingStepFour from "./BillingStepFour";

const RentalPayment = () => {
  return (
    <div className="px-5 my-10 flex flex-col gap-10 xl:px-12 lg:flex-row lg:gap-5">
      <div className="lg:order-2">
        <RentalSummary />
      </div>

      <div className="flex flex-col gap-10 w-full">
        <BillingStepOne />

        <BillingStepTwo />

        <BillingStepThree />

        <BillingStepFour />
      </div>
    </div>
  );
};

export default RentalPayment;
