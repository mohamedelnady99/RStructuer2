import { createBrowserRouter } from "react-router-dom";
import AuthRedirect from "../utils/AuthRedirect";
import Auth from "../Layouts/Auth/Index";
import  authRoutes  from "../features/auth/routes";
import Terms from "../features/InformationalPages/Terms";
import Policy from "../features/InformationalPages/Policy";
import NotFoundLayout from "../Layouts/NotFound";
import NotFound from "../components/Shared/NotFound";
import UnAuth from "../components/Shared/UnAuth";
import Home from "@/features/InformationalPages/Home";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: (
      <AuthRedirect>
        <Auth />
      </AuthRedirect>
    ),
    children: [...authRoutes],
  },
  {
    path: "/",
    
    element:(<AuthRedirect><Home /></AuthRedirect>),
    
    // children: [...appRoutes],
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/Policy",
    element: <Policy />,
  },
  {
    path: "*",
    element: <NotFoundLayout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/",
    element: <NotFoundLayout />,
    children: [
      {
        path: "403",
        element: <UnAuth />,
      },
    ],
  },
]);

export default router;
