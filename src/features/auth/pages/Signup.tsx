import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Intro from "../components/Intro";
import Button from "../components/Button";
import { useMutate } from "@/Hooks/useMutate";

type UserRole = "owner" | "manager" | "veterinarian" | "operator";

interface SignUpFormInputs {
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .min(10, "Phone must be at least 10 digits")
    .max(15, "Phone number is too long")
    .required("Phone number is required"),
  role: yup
    .string()
    .oneOf(
      ["owner", "manager", "veterinarian", "operator"],
      "Please select a valid role",
    )
    .required("Role is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

const USER_ROLES: { value: UserRole; label: string }[] = [
  { value: "owner", label: "Ranch Owner" },
  { value: "manager", label: "Herd Manager" },
  { value: "veterinarian", label: "Veterinarian" },
  { value: "operator", label: "Field Operator" },
];

function SignUp() {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const { mutateAsync, isPending } = useMutate();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    resolver: yupResolver(schema),
  });

  const toggleVisibility = (field: "password" | "confirmPassword") => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    try {
      await mutateAsync({
        url: "/register",
        method: "post",
        body: data,
      });
      navigate("/auth");
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2">
        <Intro />
      </div>

      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6 overflow-y-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm space-y-4 py-8"
        >
          <h1 className="text-[#002819] text-4xl text-center font-bold mb-6">
            Sign Up
          </h1>

          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Full Name"
              className={`bg-gray-50 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
                errors.name ? "focus:ring-red-500" : "focus:ring-[#002819]"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className={`bg-gray-50 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-[#002819]"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone Number"
              className={`bg-gray-50 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
                errors.phone ? "focus:ring-red-500" : "focus:ring-[#002819]"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("role")}
              defaultValue=""
              className={`bg-gray-50 border ${
                errors.role ? "border-red-500" : "border-gray-300"
              } text-gray-700 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
                errors.role ? "focus:ring-red-500" : "focus:ring-[#002819]"
              }`}
            >
              <option value="" disabled>
                Select your role
              </option>
              {USER_ROLES.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              {...register("password")}
              type={passwordVisibility.password ? "text" : "password"}
              placeholder="Password"
              className={`bg-gray-50 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
                errors.password ? "focus:ring-red-500" : "focus:ring-[#002819]"
              }`}
            />
            <button
              type="button"
              onClick={() => toggleVisibility("password")}
              className="absolute right-3 top-3 text-gray-400 text-lg"
            >
              {passwordVisibility.password ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              {...register("confirmPassword")}
              type={passwordVisibility.confirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className={`bg-gray-50 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
                errors.confirmPassword
                  ? "focus:ring-red-500"
                  : "focus:ring-[#002819]"
              }`}
            />
            <button
              type="button"
              onClick={() => toggleVisibility("confirmPassword")}
              className="absolute right-3 top-3 text-gray-400 text-lg"
            >
              {passwordVisibility.confirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button disabled={isPending}>
            {isPending ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        <p className="flex justify-center mt-2 text-[18px]">
          Already have an account?{" "}
          <Link
            to="/auth"
            className="ml-1 text-[#06402B] font-medium hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
