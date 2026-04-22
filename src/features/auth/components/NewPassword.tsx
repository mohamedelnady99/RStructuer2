import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "./Button";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMutate } from "@/Hooks/useMutate";
import Cookies from "js-cookie";
import { useAuthSelector } from "@/stores/reducers/AuthSlice";

interface NewPasswordFormInputs {
  new_password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  new_password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("new_password")], "Passwords must match")
    .required("Confirm Password is required"),
});

function NewPassword() {
  const { token } = useAuthSelector((store) => store.auth);
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
  } = useForm<NewPasswordFormInputs>({
    resolver: yupResolver(schema),
  });

  const toggleVisibility = (field: "password" | "confirmPassword") => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const onSubmit: SubmitHandler<NewPasswordFormInputs> = async (data) => {
    try {
      await mutateAsync({
        url: "/reset/password",
        method: "post",
        body: { ...data, token },
      });
      Cookies.remove("token");
      navigate("/auth");
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
      <form
        className="w-full max-w-sm space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-[#002819] text-4xl text-center font-bold mb-4">
          New Password
        </h1>

        <div className="relative">
          <input
            {...register("new_password")}
            type={passwordVisibility.password ? "text" : "password"}
            placeholder="New Password"
            className={`bg-gray-50 border ${
              errors.new_password ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
              errors.new_password ? "focus:ring-red-500" : "focus:ring-[#002819]"
            }`}
          />
          <button
            type="button"
            onClick={() => toggleVisibility("password")}
            className="absolute right-3 top-3 text-gray-400 text-lg"
          >
            {passwordVisibility.password ? <FaEyeSlash /> : <FaEye />}
          </button>
          {errors.new_password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.new_password.message}
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
          {isPending ? "Saving..." : "Save Password"}
        </Button>
      </form>
    </div>
  );
}

export default NewPassword;
