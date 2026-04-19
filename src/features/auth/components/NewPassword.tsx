// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Button from "./Button";
// // import { useForm, SubmitHandler } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import * as yup from "yup";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { useAuthSelector } from "@/stores/reducers/AuthSlice";
// import { i18n } from "@/i18n";

// interface NewPasswordFormInputs {
//   new_password: string;
//   confirmPassword: string;
// }

// function NewPassword() {
//   const { token } = useAuthSelector((store) => store.auth);
//   const rtl = i18n.getLanguage() === "ar";

//   // const schema = yup.object().shape({
//   //   new_password: yup.string().required("Password is required"),
//   //   confirmPassword: yup
//   //     .string()
//   //     .oneOf([yup.ref("new_password")], "Passwords must match")
//   //     .required("Confirm password is required"),
//   // });

//   const [passwordVisibility, setPasswordVisibility] = useState<{
//     password: boolean;
//     confirmPassword: boolean;
//   }>({
//     password: false,
//     confirmPassword: false,
//   });

//   // Form state بدون hooks
//   const [formData, setFormData] = useState<NewPasswordFormInputs>({
//     new_password: "",
//     confirmPassword: "",
//   });

//   const [formErrors, setFormErrors] = useState<
//     Partial<Record<keyof NewPasswordFormInputs, string>>
//   >({});

//   const navigate = useNavigate();
//   const [isPending, setIsPending] = useState(false);

//   // const {
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors },
//   // } = useForm<NewPasswordFormInputs>({
//   //   resolver: yupResolver(schema),
//   // });

//   const toggleVisibility = (field: "password" | "confirmPassword") => {
//     setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
//   };

//   // Validation function بدون yup
//   const validateForm = (): boolean => {
//     const errors: Partial<Record<keyof NewPasswordFormInputs, string>> = {};

//     if (!formData.new_password) {
//       errors.new_password = "Password is required";
//     }
//     if (!formData.confirmPassword) {
//       errors.confirmPassword = "Confirm password is required";
//     }
//     if (
//       formData.new_password &&
//       formData.confirmPassword &&
//       formData.new_password !== formData.confirmPassword
//     ) {
//       errors.confirmPassword = "Passwords must match";
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     field: keyof NewPasswordFormInputs,
//   ) => {
//     setFormData((prev) => ({ ...prev, [field]: e.target.value }));
//     // Clear error for this field when user starts typing
//     if (formErrors[field]) {
//       setFormErrors((prev) => ({ ...prev, [field]: undefined }));
//     }
//   };

//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       setIsPending(true);
//       // Replace with your actual API call
//       // await mutateAsync({
//       //   url: "/reset/password",
//       //   method: "post",
//       //   body: { ...formData, token },
//       // });
//       Cookies.remove("token");
//       navigate("/auth");
//     } catch (error) {
//       console.error("Error resetting password:", error);
//     } finally {
//       setIsPending(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
//       <form className="w-full max-w-sm space-y-10" onSubmit={onSubmit}>
//         <h1 className="text-Main text-4xl text-center font-bold mb-4">
//           New Password
//         </h1>
//         <div className="relative">
//           <input
//             value={formData.new_password}
//             onChange={(e) => handleInputChange(e, "new_password")}
//             type={passwordVisibility.password ? "text" : "password"}
//             placeholder="Password"
//             className={`bg-gray-50 border ${
//               formErrors.new_password ? "border-red-500" : "border-gray-300"
//             } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//               formErrors.new_password ? "focus:ring-red-500" : "focus:ring-Main"
//             }`}
//           />
//           <button
//             type="button"
//             onClick={() => toggleVisibility("password")}
//             className={`absolute ${rtl ? "left-5" : "right-5"} top-3 text-gray-400 text-lg`}
//           >
//             {passwordVisibility.password ? <FaEyeSlash /> : <FaEye />}
//           </button>
//           {formErrors.new_password && (
//             <p className="text-red-500 text-sm">{formErrors.new_password}</p>
//           )}
//         </div>

//         <div className="relative">
//           <input
//             value={formData.confirmPassword}
//             onChange={(e) => handleInputChange(e, "confirmPassword")}
//             type={passwordVisibility.confirmPassword ? "text" : "password"}
//             placeholder="Confirm Password"
//             className={`bg-gray-50 border ${
//               formErrors.confirmPassword ? "border-red-500" : "border-gray-300"
//             } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
//               formErrors.confirmPassword
//                 ? "focus:ring-red-500"
//                 : "focus:ring-Main"
//             }`}
//           />
//           <button
//             type="button"
//             onClick={() => toggleVisibility("confirmPassword")}
//             className={`absolute ${rtl ? "left-5" : "right-5"} top-3 text-gray-400 text-lg`}
//           >
//             {passwordVisibility.confirmPassword ? <FaEyeSlash /> : <FaEye />}
//           </button>
//           {formErrors.confirmPassword && (
//             <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>
//           )}
//         </div>

//         <Button disabled={isPending}>
//           <span>{isPending ? "Saving..." : "Save"}</span>
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default NewPassword;

export default function NewPassword() {
  return (
    <div>NewPassword</div>
  )
}
