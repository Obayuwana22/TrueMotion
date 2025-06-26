import React, { useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../services/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

   const handleGoogleSubmit = async (e) => {
      e.preventDefault();
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        if (user.emailVerified === true) {
          toast.success("welcome Back!");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
        console.log(result);
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // validation
    if (!email || !password) {
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

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must include both letters and numbers.");
      return;
    }

    // create new user account
    try {
      setLoading(true);
      // await login(email, password);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      toast.success("welcome Back!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
      setFormData({ fullName: "", email: "", password: "" });
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
      setLoading(false);
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
                <Lock className="text-primary-white" />
              </div>
              <h1 className="font-semibold">Welcome Back</h1>
              <p className="mb-5 text-secondary-400 text-center">
                Sign in to your account to continue your experience
              </p>
            </div>

            <div className="flex flex-col space-y-3 font-semibold text-sm">
               <button onClick={handleGoogleSubmit} className="flex items-center justify-center gap-3 border py-3 rounded-md border-secondary-100 cursor-pointer">
                <FcGoogle />
                <span>Continue with Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 border py-3 rounded-md border-secondary-100 cursor-pointer ">
                <FaApple />
                <span> Continue with Apple</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 uppercase text-xs my-7 ">
              <div className="flex-1 w-[50px] h-px bg-secondary-100"></div>
              <span className="whitespace-nowrap text-secondary-400">
                {" "}
                or continue with email
              </span>
              <div className="flex-1 w-[50px] h-px bg-secondary-100"></div>
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

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="font-medium text-sm">
                    Password
                  </label>
                  <Link
                    to={"/forgot-password"}
                    className="text-xs font-semibold text-primary-500 hover:text-primary-600"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-300 w-4 h-4" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-secondary-300  hover:text-secondary-500 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Eye className="  w-4 h-4" />
                    ) : (
                      <EyeOff className=" w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-2 my-5 text-xs">
              <Input type="checkbox" />
              <p className="text-xs ">Remember me in 30 days</p>
            </div>

            <button
              type="submit"
              className="font-semibold text-primary-white py-3 rounded-md cursor-pointer bg-gradient-to-r from-primary-600 to-information-600 w-full  hover:from-primary-800 hover:to-information-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? (
                <div className="spinner"></div>
              ) : (
                <div className="flex gap-3 items-center justify-center ">
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </button>

            <p className="text-center mt-5 ">
              <span>Don't have an account?</span>
              <Link
                to={"/signup"}
                className="text-primary-500 font-semibold ml-1 hover:text-primary-600 cursor-pointer"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
