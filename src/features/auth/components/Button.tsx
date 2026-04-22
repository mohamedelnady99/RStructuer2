import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      className="w-full bg-[#002819] text-white rounded-lg p-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
