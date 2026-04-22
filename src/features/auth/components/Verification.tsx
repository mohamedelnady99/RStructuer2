import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./Button";
import { useMutate } from "@/Hooks/useMutate";
import { useDispatch } from "react-redux";
import { setIsVerifySuccessful, SetToken } from "@/stores/reducers/AuthSlice";
import Cookies from "js-cookie";

interface VerifyInputs {
  otp: string;
}

const schema = yup.object().shape({
  otp: yup
    .string()
    .length(4, "OTP must be 4 digits")
    .matches(/^\d+$/, "OTP must contain only digits")
    .required("OTP is required"),
});

function Verification() {
  const dispatch = useDispatch();
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { mutateAsync, isPending } = useMutate();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VerifyInputs>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("otp", code.join(""));
  }, [code, setValue]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit: SubmitHandler<VerifyInputs> = async (data) => {
    try {
      const response = await mutateAsync({
        url: "/confirm/otp",
        method: "post",
        body: { otp: data.otp },
      });
      const token = response.data.token;
      dispatch(SetToken(token));
      dispatch(setIsVerifySuccessful());
      Cookies.set("token", token);
    } catch (error) {
      console.error("OTP verification failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
      <form
        className="w-full max-w-sm space-y-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-[#002819] text-4xl text-center font-bold mb-8">
          Verification
        </h1>
        <p className="text-center text-gray-600">
          Please enter the 4-digit code sent to your email.
        </p>

        <div className="flex justify-center gap-4">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border rounded-lg text-center text-2xl text-[#002819] focus:outline-none focus:ring-2 focus:ring-[#002819]"
            />
          ))}
        </div>

        {errors.otp && (
          <p className="text-red-500 text-center text-sm">
            {errors.otp.message}
          </p>
        )}

        <Button disabled={isPending}>
          {isPending ? "Verifying..." : "Verify"}
        </Button>
      </form>
    </div>
  );
}

export default Verification;
