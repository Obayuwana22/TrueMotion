// import React, { useState } from "react";
// import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import Input from "./Input";
// import { Link } from "react-router-dom";

// const Auth = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="bg-primary-white max-w-[500px] rounded-2xl shadow-2xl">
//           <div className="p-10">
//             <div className="flex flex-col gap-3 items-center ">
//               <div className="p-3 rounded-xl bg-gradient-to-r from-primary-600 to-information-600">
//                 <User className="text-primary-white" />
//               </div>
//               <h1 className="font-semibold">Create your account</h1>
//               <p className="mb-5 text-secondary-400 text-center">
//                 Join thousands choosing smarter car rentals.
//               </p>
//             </div>

//             <div className="flex flex-col space-y-3 font-semibold text-sm">
//               <button className="flex items-center justify-center gap-3 border py-3 rounded-md border-secondary-100 cursor-pointer ">
//                 <FaApple />
//                 <span> Continue with Apple</span>
//               </button>
//               <button className="flex items-center justify-center gap-3 border py-3 rounded-md border-secondary-100 cursor-pointer">
//                 <FcGoogle />
//                 <span>Continue with Google</span>
//               </button>
//             </div>

//             <div className="flex items-center justify-center gap-2 uppercase text-xs my-7 ">
//               <div className="flex-1 w-[50px] h-px bg-secondary-100"></div>
//               <span className="whitespace-nowrap text-secondary-400">
//                 {" "}
//                 or continue with email
//               </span>
//               <div className="flex-1 w-[50px] h-px bg-secondary-100"></div>
//             </div>

//             <div className="space-y-5">
//               <div className="flex flex-col gap-2">
//                 <label htmlFor="fullName" className="font-medium text-sm">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <User className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-300 w-4 h-4" />
//                   <Input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     placeholder="Enter your full name"
//                     className="w-full"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label htmlFor="email" className="font-medium text-sm">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-300 w-4 h-4" />
//                   <Input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     className="w-full"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label htmlFor="password" className="font-medium text-sm">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Lock className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-300 w-4 h-4" />
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     name="password"
//                     placeholder="Create a strong password"
//                     className="w-full"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                   <button
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-secondary-300  hover:text-secondary-500 transition-colors"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <Eye className="  w-4 h-4" />
//                     ) : (
//                       <EyeOff className=" w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//                 <p className="text-xs text-secondary-300">
//                   Must be at least 8 characters with numbers and letter
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-2 my-5 text-xs">
//               <Input type="checkbox" />
//               <p>
//                 I agree to the{" "}
//                 <a
//                   href="#"
//                   className="underline text-primary-500 hover:text-primary-600"
//                 >
//                   Terms of Services
//                 </a>{" "}
//                 and{" "}
//                 <a
//                   href="#"
//                   className="underline text-primary-500 hover:text-primary-600"
//                 >
//                   Privacy Policy
//                 </a>
//               </p>
//             </div>

//             <button
//               type="submit"
//               className="flex gap-3 items-center justify-center text-primary-white py-3 rounded-md cursor-pointer bg-gradient-to-r from-primary-600 to-information-600 w-full  hover:from-primary-800 hover:to-information-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
//             >
//               <span className="font-semibold">Create Account</span>
//               <ArrowRight className="w-4 h-4" />
//             </button>

//             <p className="text-center mt-5 ">
//               <span>Already have an account?</span>
//               <Link className="text-primary-500 font-semibold ml-1 hover:text-primary-600">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Auth;
