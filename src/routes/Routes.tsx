import { createBrowserRouter } from "react-router-dom";
import AuthRedirect from "../utils/AuthRedirect";
import Auth from "../Layouts/Auth/Index";
import authRoutes  from "../features/auth/routes";
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
  //here example we can add all the routes that need authentication and authorization and wrap them with the AuthenticationRouter
  //   {
  //   path: "/dashboard",
  //   element: (
  //     <AuthenticationRouter>
  //       <Dashboard /> this is just an example from features/dashboard/index.tsx you can replace it with your own component that will be the main layout for all the authenticated routes and then you can add the children routes that will be rendered inside the dashboard layout
  //     </AuthenticationRouter>
  //   ),
  //   children: [
  //     ...settingsRoutes,
  //     ...mazadRoutes,
  //     ...orderRoutes,
  //     ...userRoutes,
  //   ],
  // },
  {
    path: "/", 
    element:<Home />,
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
