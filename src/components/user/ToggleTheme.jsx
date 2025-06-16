import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { PiSunDim } from "react-icons/pi";

const ToggleTheme = () => {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => setIsActive((prev) => !prev)
  return (
    <div>
      <div className="flex items-center gap-1 text-secondary-300 bg-secondary-100 rounded-full">
        <button
          className={`rounded-full p-1 cursor-pointer ${
            isActive ? "bg-primary-500 text-primary-white" : ""
          }`}
          onClick={handleToggle}
        >
          <PiSunDim size={20} />
        </button>
        <button
          className={`rounded-full p-1 cursor-pointer ${
            isActive ? "" : " bg-primary-500  text-primary-white"
          }`}
          onClick={handleToggle}
        >
          <IoMoonOutline size={16} />
        </button>
      </div>
    </div>
  );
};

export default ToggleTheme;
