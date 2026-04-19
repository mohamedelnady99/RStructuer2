// // import { useForm, SubmitHandler } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import Button from "./Button";
// import { useMutate } from "@/Hooks/useMutate";
// import { useDispatch } from "react-redux";
// import { setIsResetSuccessful } from "@/stores/reducers/AuthSlice";
// import { useLanguageSelector } from "@/stores/reducers/LanguageSlice";

// interface ResetPasswordInputs {
//   email: string;
// }

// function ResetPassword() {
//   const {translations}=useLanguageSelector((state)=>state.LanguageReducer)
//   const dispatch = useDispatch();
//   const { mutateAsync, isPending } = useMutate();
//   const schema = yup.object().shape({
//     email: yup
//       .string()
//       .email("Invalid email address")
//       .required("Email is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ResetPasswordInputs>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit: SubmitHandler<ResetPasswordInputs> = async (data) => {
//     try {
//       await mutateAsync({
//         url: "/forget/password",
//         method: "post",
//         body: { ...data },
//       });
//       dispatch(setIsResetSuccessful());
//     } catch (error) {
//       console.error("Reset password failed:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-sm space-y-8"
//       >
//         <h1 className="text-Main text-4xl text-center font-bold mb-8">
//           {translations.resetPasswordTitle}
//         </h1>
       

//         <div>
//           <input
//             {...register("email")}
//             type="email"
//             placeholder={translations.emailPlaceholder}
//             className={`bg-gray-50 border ${
//               errors.email ? "border-red-500" : "border-gray-300"
//             } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//               errors.email ? "focus:ring-red-500" : "focus:ring-Main"
//             }`}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//           )}
//         </div>

//         <Button disabled={isPending}>
//           <span>{isPending ? translations.sending : translations.send}</span>
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default ResetPassword;



export default function ResetPassword() {
  return (
    <div>ResetPassword</div>
  )
}
