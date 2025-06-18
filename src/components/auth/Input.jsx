import React from "react";

const Input = ({ className="", ...props }) => {
  
  return (
    <input
      {...props}
      className={`border pl-10 p-3 border-secondary-100 placeholder:text-secondary-300 rounded-md ${className}`}
    />
  );
};

export default Input;
