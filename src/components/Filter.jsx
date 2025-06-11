import React, { useState } from "react";
import { carFeatures } from "../data";
import { useGlobalContext } from "../context/GlobalContext";

const Filter = () => {
  const { isFilterActive } = useGlobalContext();
  const [rangeNumber, setRangeNumber] = useState(50);

  const handleRangeChange = (e) => {
    setRangeNumber(e.target.value);
  };

  return (
    <>
      {isFilterActive && (
        <div className="bg-primary-white w-full px-10 py-5 mb-5 lg:h-full xl:w-[360px] shadow-2xl xl:shadow-none xl:mb-0">
          <div className="font-semibold text-black space-y-10">
            {carFeatures.map((feature) => (
              <div key={feature.id} className="space-y-5">
                <div className="text-sm text-secondary-300 uppercase">
                  {feature.title}
                </div>
                {feature.list.map((list) => (
                  <div key={list.id} className="xl:text-xl">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="scale-150"
                    />
                    <span className="text-secondary-400 ml-3 mr-2">
                      {list.label}
                    </span>
                    <span className="text-secondary-300">
                      ({list.quantity})
                    </span>
                  </div>
                ))}
              </div>
            ))}
            <div>
              <div className="text-sm text-secondary-300 uppercase mb-5">
                Price
              </div>
              <input
                type="range"
                name=""
                id=""
                value={rangeNumber}
                onChange={handleRangeChange}
                className="w-full max-w-[360px]"
              />
              <div className="text-secondary-400 xl:text-xl">
                Max. ${rangeNumber}.00
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
