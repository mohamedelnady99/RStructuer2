// import {  useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// import { Link, useNavigate } from "react-router-dom";
// import Intro from "../components/Intro";
// import Button from "../components/Button";
// import { useMutate } from "@/Hooks/useMutate";
// import { useAirportsSelector } from "@/stores/reducers/AirportSlices";
// import { useAirlinesSelector } from "@/stores/reducers/AirlinesSlices";
// import { useLanguageSelector } from "@/stores/reducers/LanguageSlice";

// interface SignUpFormInputs {
//   name: string;
//   email: string;
//   phone: string;
//   job_title: string;
//   password: string;
//   confirmPassword: string;
//   airport_id?:string
//   airline_id?:string
// }



// function SignUp() {

//   const {translations,lang}=useLanguageSelector((state)=>state.LanguageReducer)
//   const rtl = lang === "ar";


//   const schema = yup.object().shape({
//     name: yup.string().required(translations.usernameRequired),
//     email: yup.string() .email(translations.invalidEmail).required(translations.emailRequired),
//     phone: yup.string().required(translations.phoneRequired).min(10,translations.phoneMin).max(11,translations.phoneMax),
//     job_title: yup.string().required(translations.jobTitleRequired),
//     password: yup.string().required(translations.passwordRequired),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password")], translations.passwordMismatch)
//       .required(translations.confirmPasswordRequired),
//   });
//   const [passwordVisibility, setPasswordVisibility] = useState<{
//     password: boolean;
//     confirmPassword: boolean;
//   }>({
//     password: false,
//     confirmPassword: false,
//   });
//   const [jobTitle, setJobTitle] = useState<string | undefined>(undefined);

  

  
  
//   const { mutateAsync, isPending } = useMutate();
//   const navigate = useNavigate();

//   const {Airports}=useAirportsSelector((state)=>state.AirportsReducer)
//   const {Airlines}=useAirlinesSelector((state)=>state.AirlinesReducer)
  
  

  

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignUpFormInputs>({
//     resolver: yupResolver(schema),
//   });
  

//   const toggleVisibility = (field: "password" | "confirmPassword") => {
//     setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
//   };


//   const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
//     try {
//       await mutateAsync({
//         url: "/register",
//         method: "post",
//         body: { ...data },
//       });
//       navigate("/auth");
//     } catch (error) {
//       console.error("Error signing up:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       <div className="w-full md:w-1/2">
//         <Intro />
//       </div>
//       <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="w-full max-w-sm space-y-10"
//         >
//           <h1 className="text-Main text-4xl text-center font-bold mb-4">
//           {translations.signUp}
//           </h1>
//           <div className="space-y-4">
//             <input
//               {...register("name")}
//               type="text"
//               placeholder={translations.usernamePlaceholder}
//               className={`bg-gray-50 border ${
//                 errors.name ? "border-red-500" : "border-gray-300"
//               } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//                 errors.name ? "focus:ring-red-500" : "focus:ring-Main"
//               }`}
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm">{errors.name.message}</p>
//             )}

//             <input
//               {...register("email")}
//               type="email"
//               placeholder={translations.emailPlaceholder}
//               className={`bg-gray-50 border ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//                 errors.email ? "focus:ring-red-500" : "focus:ring-Main"
//               }`}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email.message}</p>
//             )}

//             <input
//               {...register("phone")}
//               type="text"
//               placeholder={translations.phonePlaceholder}
//               className={`bg-gray-50 border ${
//                 errors.phone ? "border-red-500" : "border-gray-300"
//               } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//                 errors.phone ? "focus:ring-red-500" : "focus:ring-Main"
//               }`}
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-sm">{errors.phone.message}</p>
//             )}
// <select
//   {...register("job_title", {
//     onChange: (event) => setJobTitle(event.target.value), 
//   })}
//   className={`bg-gray-50 border ${
//     errors.job_title ? "border-red-500" : "border-gray-300"
//   } text-gray-400 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//     errors.job_title ? "focus:ring-red-500" : "focus:ring-Main"
//   }`}
// >
//   <option value="" >
//     {translations.jobTitlePlaceholder}
//   </option>
//   <option value="0">{translations.hotelEmployee}</option>
//   <option value="1">{translations.airportEmployee}</option>
//   <option value="2"> {translations.airlineEmployee}</option>
// </select>

//             {errors.job_title && (
//               <p className="text-red-500 text-sm">{errors.job_title.message}</p>
//             )}
// {(jobTitle=="1"||jobTitle=="2")&&<select
//   {...register("airport_id", {
//   })}
//   className={`bg-gray-50 border ${
//     errors.airport_id ? "border-red-500" : "border-gray-300"
//   } text-gray-400 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//     errors.airport_id ? "focus:ring-red-500" : "focus:ring-Main"
//   }`}
// >
//   <option value="" >
//     {translations.airportPlaceholder}
//   </option>
//   {
//     Airports?.map((item, index) => (
//       <option key={index} value={item.id}>
//         {item.title}
//       </option>
//     ))
    

    
//   }
// </select>
// }
// {(jobTitle=="2")&&<select
//   {...register("airline_id", {
//   })}
//   className={`bg-gray-50 border ${
//     errors.airline_id ? "border-red-500" : "border-gray-300"
//   } text-gray-400 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//     errors.airline_id ? "focus:ring-red-500" : "focus:ring-Main"
//   }`}
// >
//   <option value="" >
//     {translations.airlinePlaceholder}
//   </option>
//   {
//     Airlines?.map((item, index) => (
//       <option key={index} value={item.id}>
//         {item.title}
//       </option>
//     ))
    

    
//   }
// </select>
// }

//             {errors.job_title && (
//               <p className="text-red-500 text-sm">{errors.job_title.message}</p>
//             )}

//             <div className="relative">
//               <input
//                 {...register("password")}
//                 type={passwordVisibility.password ? "text" : "password"}
//                 placeholder="Password"
//                 className={`bg-gray-50 border ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//                   errors.password ? "focus:ring-red-500" : "focus:ring-Main"
//                 }`}
//               />
//               <button
//                 type="button"
//                 onClick={() => toggleVisibility("password")}
//                 className={`absolute ${rtl?"left-3":"right-3"} top-3 text-gray-400 text-lg`}
//                 >
//                 {passwordVisibility.password ? <FaEyeSlash /> : <FaEye />}
//               </button>
//               {errors.password && (
//                 <p className="text-red-500 text-sm">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

            
//             <div className="relative">
//               <input
//                 {...register("confirmPassword")}
//                 type={passwordVisibility.confirmPassword ? "text" : "password"}
//                 placeholder="Confirm Password"
//                 className={`bg-gray-50 border ${
//                   errors.confirmPassword ? "border-red-500" : "border-gray-300"
//                 } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//                   errors.confirmPassword
//                     ? "focus:ring-red-500"
//                     : "focus:ring-Main"
//                 }`}
//               />
//               <button
//                 type="button"
//                 onClick={() => toggleVisibility("confirmPassword")}
//                 className={`absolute ${rtl?"left-3":"right-3"} top-3 text-gray-400 text-lg`}
//                 >
//                 {passwordVisibility.confirmPassword ? (
//                   <FaEyeSlash />
//                 ) : (
//                   <FaEye />
//                 )}
//               </button>
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-sm">
//                   {errors.confirmPassword.message}
//                 </p>
//               )}
//             </div>


//           </div>
//           <Button disabled={isPending}>
//             <span>{isPending ? translations.SigningUp :translations.signUp}</span>
//           </Button>
//         </form>
//         <p className="flex justify-center mt-8 text-[18px]">
//           {translations.loginPrompt}
//           <Link to={"/auth"} className="ml-1 text-second">{translations.logIn}</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignUp;


function SignUp() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2">
        {/* <Intro /> */}
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
        <h1 className="text-Main text-4xl text-center font-bold mb-4">
          Sign Up Page
        </h1>
      </div>
    </div>
  );
}

export default SignUp;