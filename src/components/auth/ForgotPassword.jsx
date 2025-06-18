import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Key, Mail } from "lucide-react";
import Input from "./Input";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" bg-primary-white rounded-2xl shadow-2xl p-10 md:w-[500px]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 items-center ">
            <div className="p-3 rounded-xl bg-gradient-to-r from-primary-600 to-information-600">
              <Key className="text-primary-white" />
            </div>
            <h1 className="font-semibold">Forgot Password?</h1>
            <p className="mb-5 text-secondary-400 text-center">
              No worries, we'll send you a reset instructions
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-sm">
                Email Address
              </label>
              <div className="relative">
                <Mail className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-300 w-4 h-4" />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <p className="text-xs text-secondary-300 mt-3 mb-6">
            Enter the email address associated with your account
          </p>

          <button
            type="submit"
            className="flex gap-3 items-center justify-center text-primary-white py-3 rounded-md cursor-pointer bg-gradient-to-r from-primary-600 to-information-600 w-full  hover:from-primary-800 hover:to-information-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="font-semibold">Reset Password</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-center mt-5 ">
            <Link
              to={"/login"}
              className="flex items-center justify-center gap-1  text-secondary-400 font-semibold ml-1 hover:text-primary-600 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm"> Back to login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
