import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "../pages/layout/AuthLayout";
import LoginForm from "../components/auth/loginForm";
import RegisterForm from "../components/auth/registerForm";
import ActivateUser from "../pages/auth/ActivateUser";
import ForgetPasswordForm from "../components/auth/forgetPasswordForm";
import ErrorNotFound from "../pages/error.404";
import UserLayout from "../pages/layout/UserLayout";
import { AdminMenu, SellerMenu } from "./menu-Item";

const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={AuthLayout}>
            <Route index={true} Component={LoginForm} />
            <Route path="register" Component={RegisterForm} />
            <Route path="forget-password" Component={ForgetPasswordForm} />
            <Route path="activate" Component={ActivateUser} />
          </Route>
          <Route path="admin" element={<UserLayout menu={AdminMenu}/>}/>
          <Route path="seller" element={<UserLayout menu={SellerMenu}/>}/>
          <Route path="*" Component={ErrorNotFound}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;
