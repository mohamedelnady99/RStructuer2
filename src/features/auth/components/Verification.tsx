// import { useState, useRef } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import Button from "./Button";
// import { useMutate } from "@/Hooks/useMutate";
// import { useDispatch } from "react-redux";
// import { setIsVerifySuccessful, SetToken } from "@/stores/reducers/AuthSlice";
// import Cookies from "js-cookie";
// import { useLanguageSelector } from "@/stores/reducers/LanguageSlice";

// interface VerifyInputs {
//   otp: string;
// }

// function Verification() {
//   const {translations}=useLanguageSelector((state)=>state.LanguageReducer)

//   const dispatch = useDispatch();
//   const [code, setCode] = useState<string[]>(["", "", "", ""]);
//   const inputRefs = useRef<HTMLInputElement[]>([]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     const value = e.target.value;
//     if (!/^\d*$/.test(value)) return;
//     const newCode = [...code];
//     newCode[index] = value;
//     setCode(newCode);

//     if (value && index < 3) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (
//     e: React.KeyboardEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const { mutateAsync, isPending } = useMutate();

//   const schema = yup.object().shape({
//     otp: yup
//       .string()
//       .length(4, translations.otpErrorLength)
//       .matches(/^\d+$/, translations.otpErrorLength)
//       .required(translations.otpErrorRequired),
//   });

//   const {
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<VerifyInputs>({
//     resolver: yupResolver(schema),
//   });

//   const combinedOtp = code.join("");

//   setValue("otp", combinedOtp);

//   const onSubmit: SubmitHandler<VerifyInputs> = async (data) => {
//     try {
//       const response = await mutateAsync({
//         url: "/confirm/otp",
//         method: "post",
//         body: { otp: data.otp },
//       });
//       dispatch(setIsVerifySuccessful());
//       dispatch(SetToken(response.data.otp.token));
//       Cookies.set("token", response.data.token);

//       console.log("OTP verified successfully!");
//     } catch (error) {
//       console.error("OTP verification failed:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
//       <form
//         className="w-full max-w-sm space-y-8"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <h1 className="text-Main text-4xl text-center font-bold mb-8">
//           {translations.verificationTitle}
//         </h1>
//         <p className="text-center">
//         {translations.verificationDescription}
//         </p>

//         <div className="flex justify-center gap-4 mb-6">
//           {code.map((digit, index) => (
//             <input
//               key={index}
//               ref={(el) => (inputRefs.current[index] = el!)}
//               type="text"
//               inputMode="numeric"
//               maxLength={1}
//               value={digit}
//               onChange={(e) => handleChange(e, index)}
//               onKeyDown={(e) => handleKeyDown(e, index)}
//               className="w-12 h-12 border rounded-lg text-center text-2xl text-Main focus:outline-none focus:ring-2 focus:ring-Main"
//             />
//           ))}
//         </div>

//         {errors.otp && (
//           <p className="text-red-500 text-center">{errors.otp.message}</p>
//         )}

//         <Button>
//           <span>{isPending ? translations.Sending : translations.send}</span>
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default Verification;



export default function Verification() {
  return (
    <div>Verification</div>
  )
}
