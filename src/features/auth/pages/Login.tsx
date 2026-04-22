import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Intro from "../components/Intro";
import Button from "../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useMutate } from "@/Hooks/useMutate";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

interface LoginFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync, isPending } = useMutate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await mutateAsync({
        url: "/login",
        method: "post",
        body: data,
      });
      Cookies.set("token", response.data.token, { expires: 1 });
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2">
        <Intro />
      </div>

      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm space-y-4"
        >
          <h1 className="text-[#002819] text-4xl text-center font-bold mb-4">
            Log In
          </h1>

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

          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`bg-gray-50 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-2 ${
                errors.password ? "focus:ring-red-500" : "focus:ring-[#002819]"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-3 text-gray-400 text-lg"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <Link
            to="/auth/reset-password"
            className="flex justify-end text-[#06402B] text-sm hover:underline"
          >
            Forgot Password?
          </Link>

          <Button disabled={isPending}>
            {isPending ? "Logging in..." : "Log In"}
          </Button>
        </form>

        <p className="flex justify-center mt-8 text-[18px]">
          Don&apos;t have an account?{" "}
          <Link
            to="/auth/sign-up"
            className="ml-1 text-[#06402B] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
