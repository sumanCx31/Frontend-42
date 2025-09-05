"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { NavLink, Link } from "react-router";
import { EmailInput, PasswordInput } from "../form/FormInput";
import type { ICredentials } from "./contract";
import { CredentialsDTO } from "./contract";
import authSvc from "../../service/auth.service";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useAuth } from "../../context/authContext";

const Loginform = () => {
  const navigate = useNavigate();
  const { setLoggedInUserProfile } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<ICredentials>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(CredentialsDTO),
  });

  const submitForm = async (credentials: ICredentials) => {
    try {
      const response = await authSvc.loginUser(credentials);
      const userProfileResponse = await authSvc.getLoggedInProfile();

      toast.success(
        `Welcome to ${userProfileResponse.data.role} panel!`,
        { description: "You can access different panels from here!" }
      );

      const userRole = userProfileResponse.data.role;
      setLoggedInUserProfile(userProfileResponse.data);
      navigate("/" + userRole);
    } catch (exception) {
      console.error({ exception });
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side Content */}
      <div className="lg:flex-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 text-white p-10 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="max-w-md text-center lg:text-left animate-fade-left">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to <span className="text-yellow-300">SwiftBuy</span>
          </h1>
          <p className="text-lg lg:text-xl font-light mb-6 drop-shadow-sm">
            Discover exclusive products, deals, and offers. Experience seamless shopping with our modern platform.
          </p>
          <div className="hidden lg:block">
            <img
              src="/login-illustration.png" 
              alt="Shopping illustration"
              className="w-full max-w-sm rounded-xl shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Right Side Login Form */}
      <div className="lg:flex-1 flex justify-center items-center p-6 bg-gray-100 relative">
        <div className="relative w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-lg p-10 shadow-2xl animate-fade-up transition-all duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Swift<span className="text-blue-600">Buy</span> Login
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Sign in to explore exclusive products and offers!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <EmailInput
                control={control}
                name="email"
                errMsg={errors?.email?.message as string}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <PasswordInput
                control={control}
                name="password"
                errMsg={errors?.password?.message as string}
              />
            </div>

            <div className="flex justify-end">
              <NavLink
                to="/forget-password"
                className="text-sm italic text-blue-600 hover:underline transition"
              >
                Forgot Password?
              </NavLink>
            </div>

            <div className="flex gap-4 mt-2">
              <Button
                htmlType="reset"
                size="large"
                className="w-full rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md transition-all"
              >
                Cancel
              </Button>
              <Button
                htmlType="submit"
                size="large"
                className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all"
              >
                Login
              </Button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <span className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-gray-500 text-sm">or</span>
            <span className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Register */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline transition"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
