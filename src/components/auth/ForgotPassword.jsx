import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Key, Mail } from "lucide-react";
import Input from "./Input";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../services/auth";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email } = formData;

    if (!email) {
      toast.error("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Email must include '@' symbol.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const userCredentials = await sendPasswordResetEmail(auth, email);
      toast.success(
        "Password reset link sent! Check your inbox — and your spam folder just in case."
      );
      console.log(userCredentials);
      setLoading(false);
      setFormData({ email: "" });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex flex-col justify-center items-center h-screen bg-primary-white">
    //   <div className="p-10 w-full md:w-[500px] md:rounded-2xl md:shadow-2xl">
    <div className="  bg-primary-white">
      <ToastContainer />
      <div className="flex justify-center items-center h-screen">
        <DotLottieReact
          src="https://lottie.host/256e8dcf-05b5-48b6-8b66-fce5cfdca415/FBqFFydiFy.lottie"
          loop
          autoplay
          className="hidden md:inline-block w-full xl:max-w-[50%]"
        />
        <form onSubmit={handleSubmit}>
          <div className="p-10 w-full md:w-[500px]">
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
              {loading ? (
                <div className="spinner"></div>
              ) : (
                <div className="flex gap-3 items-center justify-center ">
                  <span>Reset Password</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
