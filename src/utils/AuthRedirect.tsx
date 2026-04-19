// AuthRedirect.tsx
import React, { useEffect } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface AuthRedirectProps {
  children: ReactNode;
}

const AuthRedirect: React.FC<AuthRedirectProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthRedirect;
