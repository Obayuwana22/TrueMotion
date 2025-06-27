import React from "react";
import { assets } from "../data";

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={assets.favicon} alt="logo" className="h-8" />
      <span className="text-2xl font-bold">TrueMotion</span>
    </div>
  );
};

export default BrandLogo;
