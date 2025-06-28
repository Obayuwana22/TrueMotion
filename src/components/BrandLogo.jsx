import React from "react";
import { assets } from "../data";

const BrandLogo = () => {
  return (
    <>
      <img src={assets.favicon} alt="logo" className="h-8" />
      <span className="text-2xl font-bold">TrueMotion</span>
    </>
  );
};

export default BrandLogo;
