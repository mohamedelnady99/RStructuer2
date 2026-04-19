import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Index from "./pages/Index";
export default [
  {
    path: "/auth",
    element: <Login />,
    name: "Login",
  },
  {
    path: "/auth/reset-password",
    element: <Index />,
    name: "Reset Password",
  },

  {
    path: "/auth/sign-up",
    element: <SignUp />,
    name: "Sign Up",
  },
];
