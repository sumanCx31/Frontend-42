import { createBrowserRouter, RouterProvider } from "react-router";
import ActivateUser from "../pages/auth/ActivateUser";
import AuthLayout from "../pages/layout/AuthLayout";
import LoginForm from "../components/auth/loginForm";
import RegisterForm from "../components/auth/registerForm";
import ForgetPasswordForm from "../components/auth/forgetPasswordForm";
import UserLayout from "../pages/layout/UserLayout";
import ErrorNotFound from "../pages/error.404";
import { AdminMenu, SellerMenu } from "../config/menu-Item";
import { Toaster } from "sonner";
import AdminDashboard from "../pages/dashboards/AdminDashboard";
import { UserRoles } from "./constants";

const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "forget-password",
        element: <ForgetPasswordForm />,
      },
      {
        path: "activate/:token",
        element: <ActivateUser />,
      },
    ],
  },
  {
    path: "/admin",
    element: <UserLayout role={UserRoles.ADMIN} menu={AdminMenu} />,
    children:[
      {
        index:true,
        Component:AdminDashboard
      }
    ]
  },

  {
    path: "/seller",
    element: <UserLayout role={UserRoles.SELLER} menu={SellerMenu} />,
  },
  {
    path: "*",
    element: <ErrorNotFound />,
  },
]);

const RouterConfig = () => {

  return (
    <>
      
        <Toaster richColors closeButton />
        <RouterProvider router={routeConfig} />
      
    </>
  );
};

export default RouterConfig;