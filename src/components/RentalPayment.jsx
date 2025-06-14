import React from "react";
import ad2Background from "../assets/png/Ads 2.png";
import BillingInput from "./BillingInput";
import pickUp from "../assets/svg/Mark.svg";
import dropOff from "../assets/svg/Mark (1).svg";
import visa from "../assets/png/visa.png";
import mc from "../assets/png/mc.png";
import paypal from "../assets/png/paypal.png";
import bitcoin from "../assets/png/bitcoin.png";
import Button from "./Button";
import safe from "../assets/svg/safe.svg";

const RentalPayment = () => {
  return (
    <div className="px-5 my-10 xl:px-12 flex flex-col gap-10">
      {/* <div className="bg-red-500 rounded-xl">
        <div>
          <div>Rental Summary</div>
          <p>
            Price may change depending on the length of the rental and the price
            of your rental car.
          </p>
        </div>
        <div>
          <div className="border-2 p-0.5 rounded-xl border-primary-500">
            <div
              className="flex justify-center items-center bg-cover bg-center rounded-xl h-full"
              style={{ backgroundImage: `url(${ad2Background})` }}
            >
              <img src={car.carImage} alt="car" className="" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-primary-white rounded-xl p-4">
        <div>
          <div className="mb-5">
            <div className="flex justify-between">
              <h2 className="font-bold mb-1">Billing Info</h2>
              <span className="text-xs text-secondary-300 font-medium">
                Step 1 of 4
              </span>
            </div>
            <p className="text-xs text-secondary-300 font-medium">
              Please enter your billing info
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <BillingInput label="Name" type="text" placeholder="Your name" />
            <BillingInput label="Address" type="text" placeholder="Address" />
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

      <div className="bg-primary-white rounded-xl p-4">
        <div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <h2 className="font-bold ">Rental Info</h2>
              <span className="text-xs text-secondary-300 font-medium">
                Step 2 of 4
              </span>
            </div>
            <p className="text-xs text-secondary-300 font-medium">
              Please select your rental date
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-7">
            <div className="flex items-center gap-2">
              <img src={pickUp} alt="" />
              <h2 className="font-bold mb-1">Pick - Up</h2>
            </div>
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
            <BillingInput
              label="Date"
              type="date"
              placeholder="Select your date"
            />
          </div>

          <div className="flex flex-col gap-4 mt-7">
            <div className="flex items-center gap-2">
              <img src={dropOff} alt="" />
              <h2 className="font-bold mb-1">Drop - Off</h2>
            </div>
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
            <BillingInput
              label="Date"
              type="date"
              placeholder="Select your date"
            />
          </div>
        </div>
      </div>

      <div className="bg-primary-white rounded-xl p-4">
        <div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <h2 className="font-bold">Payment Method</h2>
              <span className="text-xs text-secondary-300 font-medium">
                Step 3 of 4
              </span>
            </div>
            <p className="text-xs text-secondary-300 font-medium">
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
            <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-5 mt-5">
            {/* <BillingInput type="radio" placeholder="CVC"  /> */}
            {/* <BillingInput type="radio" placeholder="CVC" /> */}
            <div className="flex justify-between bg-gray-background rounded-xl p-5">
              <div className="flex gap-2">
                <input type="radio" name="" id="" />
                <div className="text-sm font-semibold">Paypal</div>
              </div>
              <img src={paypal} alt="" />
            </div>

            <div className="flex justify-between bg-gray-background rounded-xl p-5">
              <div className="flex gap-2">
                <input type="radio" name="" id="" />
                <div className="text-sm font-semibold">Bitcoin</div>
              </div>
              <img src={bitcoin} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-white rounded-xl p-4">
        <div>
          <div className="mb-5">
            <div className="flex justify-between">
              <h2 className="font-bold mb-1">Confirmation</h2>
              <span className="text-xs text-secondary-300 font-medium">
                Step 4 of 4
              </span>
            </div>
            <p className="text-xs text-secondary-300 font-medium">
              We are getting to the end. Just few <br /> clicks and your rental
              is ready!
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-5">
            <div className="flex gap-3 bg-gray-background rounded-xl p-5">
              <input type="checkbox" name="" id="" />
              <p className="text-xs font-semibold leading-5">
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </p>
            </div>

            <div className="flex gap-3 bg-gray-background rounded-xl p-5">
              <input type="checkbox" name="" id="" />
              <p className="text-xs font-semibold leading-5">
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
          <Button text="Rent Now" className="text-xs font-semibold" />

          <div className="space-y-3 mt-10">
            <img src={safe} alt="" />
            <h2 className="font-bold">All your data are safe</h2>
            <p className="text-xs text-secondary-300 font-medium">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalPayment;
