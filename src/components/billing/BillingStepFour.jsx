import React from "react";
import Button from "../Button";
import safe from "../../assets/svg/safe.svg";

const BillingStepFour = () => {
  return (
    <div className="bg-primary-white rounded-xl p-4">
      <div>
        <div className="mb-5">
          <div className="flex justify-between">
            <h2 className="font-bold mb-1 lg:text-xl">Confirmation</h2>
            <span className="text-xs text-secondary-300 font-medium lg:text-sm">
              Step 4 of 4
            </span>
          </div>
          <p className="text-xs text-secondary-300 font-medium lg:text-sm">
            We are getting to the end. Just few <br /> clicks and your rental is
            ready!
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-5">
          <div className="flex gap-3 bg-gray-background rounded-xl p-5 lg:gap-5">
            <input type="checkbox" name="" id="" className="" />
            <p className="text-xs font-semibold leading-5 lg:text-base">
              I agree with sending an Marketing and newsletter emails. No spam,
              promised!
            </p>
          </div>

          <div className="flex gap-3 bg-gray-background rounded-xl p-5 lg:gap-5">
            <input type="checkbox" name="" id="" className="" />
            <p className="text-xs font-semibold leading-5 lg:text-base">
              I agree with our{" "}
              <a href="" target="_blank" className="underline">
                terms and conditions
              </a>
              <a href="" target="_blank" className="underline">
                {" "}
                and privacy policy!
              </a>
            </p>
          </div>
        </div>
        <Button text="Rent Now" className="text-xs font-semibold lg:text-base lg:py-3 " />

        <div className="space-y-3 mt-10">
          <img src={safe} alt="" />
          <h2 className="font-bold">All your data are safe</h2>
          <p className="text-xs text-secondary-300 font-medium lg:text-sm">
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillingStepFour;
