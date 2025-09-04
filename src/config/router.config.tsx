import { createBrowserRouter, RouterProvider } from "react-router";
import ActivateUser from "../pages/auth/ActivateUser";
import AuthLayout from "../pages/layout/AuthLayout";
import LoginForm from "../components/auth/loginForm";
import RegisterForm from "../components/auth/registerForm";
import ForgetPasswordForm from "../components/auth/forgetPasswordForm";
import UserLayout from "../pages/layout/UserLayout";
import ErrorNotFound from "../pages/error.404";
import { AdminMenu, CustomerMenu, SellerMenu } from "../config/menu-Item";
import { Toaster } from "sonner";
import AdminDashboard from "../pages/dashboards/AdminDashboard";
import { UserRoles } from "./constants";
import BannerListPage from "../pages/banners/BannerListPage";
import BannerCreatePage from "../pages/banners/BannerCreatePage";
import BannerEditPage from "../pages/banners/BannerEditPage";
import ChatPage from "../pages/chat/chatPage";
import { UserLayoutProvider } from "../context/user-layout.context";

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
    element: <UserLayoutProvider><UserLayout role={UserRoles.ADMIN} menu={AdminMenu} /></UserLayoutProvider>,
    children:[
      { index:true,Component:AdminDashboard },
      {path: "banners",Component: BannerListPage},
      {path: "banner/create",Component: BannerCreatePage},
      {path: "banner/:id",Component: BannerEditPage},
      {path: "chat/", Component: ChatPage},
      {path: "*",Component: ErrorNotFound },
    ]
  },

  {
    path: "/seller",
    element: <UserLayout role={UserRoles.SELLER} menu={SellerMenu} />,
    children: [{path: "chat/", Component: ChatPage}],
  },
  {
    path: "/customer",
    element: <UserLayout role={UserRoles.CUSTOMER} menu={CustomerMenu} />,
    children: [{path: "chat/", Component: ChatPage}],
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