import React from "react";

const BillingInput = ({
  label,
  type = "text",
  options = [],
  className = "",
  ...props
}) => {
  if (type === "select") {
    return (
      <>
        <label htmlFor="" className="text-sm font-semibold">
          {label}
        </label>
        <select
          {...props}
          className="placeholder-secondary-300 text-xs font-medium p-5 bg-gray-background rounded-xl focus:outline-secondary-300"
        >
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.text}
            </option>
          ))}
        </select>
      </>
    );
  }

  if (type === "radio") {
    return (
      <input
        type={type}
        {...props}
        className={`placeholder-secondary-300 text-xs font-medium p-5 bg-gray-background rounded-xl focus:outline-secondary-300 ${className}`}
      />
    );
  }
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="" className="text-sm font-semibold">
        {label}
      </label>
      <input
        type={type}
        {...props}
        className={`placeholder-secondary-300 text-xs font-medium p-5 bg-gray-background rounded-xl focus:outline-secondary-300 ${className}`}
      />
    </div>
  );
};

export default BillingInput;
