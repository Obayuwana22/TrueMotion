import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";

const StarRating = ({ numberOfStars }) => {
  const [rating, setRating] = useState();
  const [hover, setHover] = useState();

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseMove = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="flex gap-1 cursor-pointer">
      {[...Array(numberOfStars)].map((_, index) => {
        return (
          <IoIosStar
            key={index}
            className={index <= (rating || hover) ? "text-[#FBAD39]" : "text-secondary-300"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
