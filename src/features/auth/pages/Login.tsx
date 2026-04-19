// import { useEffect, useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Intro from "../components/Intro";
// import Button from "../components/Button";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { useMutate } from "@/Hooks/useMutate";
// import Cookies from "js-cookie";
// import { Link, useNavigate } from "react-router-dom";
// import { generateToken } from "@/utils/Firebase";
// import { useLanguageSelector } from "@/stores/reducers/LanguageSlice";

// interface LoginFormInputs {
//   email: string;
//   password: string;
// }

// function Login() {
//   useEffect(()=>{
//   generateToken()


    

//   })
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const { mutateAsync, isPending } = useMutate();
//    const {translations,lang}=useLanguageSelector((state)=>state.LanguageReducer)
//    const rtl = lang === "ar";


//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const schema = yup.object().shape({
//     email: yup
//       .string()
//       .email(translations.invalidEmail)
//       .required(translations.emailRequired),
//     password: yup.string().required(translations.passwordRequired),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormInputs>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
//     try {
//       const response = await mutateAsync({
//         url: "/login",
//         method: "post",
//         body: { ...data },
//       });
//       Cookies.set("token", response.data.token,{
//           expires:1
//       });
//       navigate("/", { replace: true });
//     } catch (error) {
//       console.error("Login failed:", error);
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
//           className="w-full max-w-sm space-y-4"
//         >
//           <h1 className="text-Main text-4xl text-center font-bold mb-4">
//           {translations.logIn}
//           </h1>

//           <div>
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
//           </div>

//           <div className="relative">
//             <input
//               {...register("password")}
//               type={showPassword ? "text" : "password"}
//               placeholder={translations.passwordPlaceholder}
//               className={`bg-gray-50 border ${
//                 errors.password ? "border-red-500" : "border-gray-300"
//               } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//                 errors.password ? "focus:ring-red-500" : "focus:ring-Main"
//               }`}
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//             className={`absolute ${rtl?"left-3":"right-3"} top-3 text-gray-400 text-lg`}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </button>
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>

//           <Link to={"/auth/reset-password"} className="flex justify-end text-second text-sm">
//             {translations.forgotPassword}
//           </Link>

//           <Button disabled={isPending}>
//             <span>{isPending ? translations.loggingIn : translations.logIn}</span>
//           </Button>
//         </form>
//         <p className="flex justify-center mt-8 text-[18px]">
//           {translations.noAccount}{" "}
//           <Link to={"/auth/sign-up"} className="ml-1 text-second cursor-pointer">{translations.signUp}</Link>
//         </p>
        

        
//       </div>
//     </div>
//   );
// }

// export default Login;

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 text-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-red-600 mb-2">Forbidden</h1>
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">403</h1>
        <p className="text-lg text-gray-700 mb-6">
          You don't have permission to access this resource.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded shadow-lg hover:bg-red-700 transition-all duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default Login;