


// import React, { useState } from "react";
// import { ArrowRight, Eye, EyeOff } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Input from "./Input";

// const AuthForm = ({
//   icon,
//   title,
//   subtitle,
//   fields = [],
//   onSubmit,
//   submitText = "Submit",
//   alternateAction = {},
//   showTerms = true,
// }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState(
//     fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
//   );

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <div className="bg-primary-white max-w-[500px] rounded-2xl shadow-2xl">
//         <div className="p-10">
//           <div className="flex flex-col gap-3 items-center">
//             <div className="p-3 rounded-xl bg-gradient-to-r from-primary-600 to-information-600">
//               {icon}
//             </div>
//             <h1 className="font-semibold">{title}</h1>
//             <p className="mb-5 text-secondary-400 text-center">{subtitle}</p>
//           </div>

//           <div className="flex flex-col space-y-3 font-semibold text-sm">
//             <button type="button" className="flex items-center justify-center gap-3 border py-3 rounded-md border-secondary-100">
//               <FaApple />
//               <span>Continue with Apple</span>
//             </button>
//             <button type="button" className="flex items-center justify-center gap-3 border py-3 rounded-md border-secondary-100">
//               <FcGoogle />
//               <span>Continue with Google</span>
//             </button>
//           </div>

//           <div className="flex items-center justify-center gap-2 uppercase text-xs my-7">
//             <div className="flex-1 h-px bg-secondary-100" />
//             <span className="text-secondary-400">or continue with email</span>
//             <div className="flex-1 h-px bg-secondary-100" />
//           </div>

//           <div className="space-y-5">
//             {fields.map((field) => (
//               <div key={field.name} className="flex flex-col gap-2">
//                 <label htmlFor={field.name} className="font-medium text-sm">
//                   {field.label}
//                 </label>
//                 <div className="relative">
//                   {field.icon && (
//                     <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-300 w-4 h-4" />
//                   )}
//                   <Input
//                     type={
//                       field.type === "password"
//                         ? showPassword
//                           ? "text"
//                           : "password"
//                         : field.type
//                     }
//                     id={field.name}
//                     name={field.name}
//                     placeholder={field.placeholder}
//                     className="w-full"
//                     value={formData[field.name]}
//                     onChange={handleChange}
//                   />
//                   {field.type === "password" && (
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-300 hover:text-secondary-500 transition-colors"
//                     >
//                       {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
//                     </button>
//                   )}
//                 </div>
//                 {field.note && (
//                   <p className="text-xs text-secondary-300">{field.note}</p>
//                 )}
//               </div>
//             ))}
//           </div>

//           {showTerms && (
//             <div className="flex gap-2 my-5 text-xs">
//               <Input type="checkbox" />
//               <p>
//                 I agree to the{" "}
//                 <a href="#" className="underline text-primary-500 hover:text-primary-600">Terms of Services</a> and{" "}
//                 <a href="#" className="underline text-primary-500 hover:text-primary-600">Privacy Policy</a>
//               </p>
//             </div>
//           )}

//           <button
//             type="submit"
//             className="flex gap-3 items-center justify-center text-primary-white py-3 rounded-md bg-gradient-to-r from-primary-600 to-information-600 w-full hover:from-primary-800 hover:to-information-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
//           >
//             <span className="font-semibold">{submitText}</span>
//             <ArrowRight className="w-4 h-4" />
//           </button>

//           {alternateAction?.text && (
//             <p className="text-center mt-5">
//               <span>{alternateAction.text}</span>
//               <Link
//                 to={alternateAction.link}
//                 className="text-primary-500 font-semibold ml-1 hover:text-primary-600"
//               >
//                 {alternateAction.linkText}
//               </Link>
//             </p>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// };

// export default AuthForm;
