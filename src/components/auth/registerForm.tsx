"use client";

import { Link, useNavigate } from "react-router";
import { RegisterDefault, RegisterDTO, type IRegisterUser } from "./contract";
import {
  EmailInput,
  PasswordInput,
  RadioButtonField,
  SelectOptionsField,
  TextInput,
} from "../form/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import authSvc from "../../service/auth.service";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterUser>({
    defaultValues: RegisterDefault as IRegisterUser,
    resolver: yupResolver(RegisterDTO) as any,
  });

  const submitRegisterData = async (data: IRegisterUser) => {
    try {
      const response = await authSvc.registerUser(data);
      toast.success(response.message);
      navigate("/");
    } catch (exception: any) {
      if (exception.error) {
        Object.keys(exception.error).map((field) => {
          setError(field as keyof IRegisterUser, { message: exception.error[field] });
        });
      }
      toast.error("Sorry! Cannot register user at this moment.", {
        description: "Seems like there is an issue with the server. Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side Content */}
      <div className="lg:flex-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 text-white p-10 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="max-w-md text-center lg:text-left animate-fade-left">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Join <span className="text-yellow-300">SwiftBuy</span>
          </h1>
          <p className="text-lg lg:text-xl font-light mb-6 drop-shadow-sm">
            Create your account and start exploring exclusive products, deals, and offers.
          </p>
          <div className="hidden lg:block">
            <img
              src="/register-illustration.png" 
              alt="Register illustration"
              className="w-full max-w-sm rounded-xl shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Right Side Register Form */}
      <div className="lg:flex-1 flex justify-center items-center p-6 bg-gray-100 relative">
        <div className="relative w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-lg p-10 shadow-2xl animate-fade-up transition-all duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Swift<span className="text-blue-600">Buy</span> Register
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Sign up to access exclusive deals and personalized shopping experience!
          </p>

          <form onSubmit={handleSubmit(submitRegisterData)} className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Full Name</label>
              <TextInput
                name="fullname"
                control={control}
                errMsg={errors.fullname?.message}
                placeholder="Enter full name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Email</label>
              <EmailInput
                name="email"
                control={control}
                errMsg={errors.email?.message}
                placeholder="Enter email"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Password</label>
              <PasswordInput
                name="password"
                control={control}
                errMsg={errors.password?.message}
                placeholder="Enter password"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Confirm Password</label>
              <PasswordInput
                name="confirmPassword"
                control={control}
                errMsg={errors.confirmPassword?.message}
                placeholder="Confirm password"
              />
            </div>

            {/* Role */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Role</label>
              <SelectOptionsField
                name="role"
                control={control}
                errMsg={errors.role?.message}
                options={[
                  { label: "Customer", value: "customer" },
                  { label: "Seller", value: "seller" },
                ]}
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Gender</label>
              <RadioButtonField
                name="gender"
                control={control}
                errMsg={errors.gender?.message}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                  { label: "Other", value: "other" },
                ]}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Phone</label>
              <TextInput
                name="phone"
                control={control}
                errMsg={errors.phone?.message}
                placeholder="Enter phone number"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-2">
              <button
                type="button"
                disabled={isSubmitting}
                className="w-1/2 h-10 rounded-lg bg-red-500 text-white hover:bg-red-600 transition hover:scale-95 disabled:bg-red-500/20 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 h-10 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition hover:scale-95 disabled:bg-blue-600/20 disabled:cursor-not-allowed"
              >
                Register
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <span className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-gray-500 text-sm">or</span>
            <span className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-blue-600 font-medium hover:underline transition"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
