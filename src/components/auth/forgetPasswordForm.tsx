"use client";

import { NavLink, Link } from "react-router";

const ForgetPasswordForm = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side Content */}
      <div className="lg:flex-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 text-white p-10 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="max-w-md text-center lg:text-left animate-fade-left">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Forgot <span className="text-yellow-300">Password?</span>
          </h1>
          <p className="text-lg lg:text-xl font-light mb-6 drop-shadow-sm">
            Enter your email to reset your password and regain access to your account.
          </p>
          <div className="hidden lg:block">
            <img
              src="/forget-password-illustration.png"
              alt="Forget Password illustration"
              className="w-full max-w-sm rounded-xl shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="lg:flex-1 flex justify-center items-center p-6 bg-gray-100 relative">
        <div className="relative w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-lg p-10 shadow-2xl animate-fade-up transition-all duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Reset Your Password
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your email and follow the instructions to reset your password.
          </p>

          <form className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <button
                type="button"
                className="w-1/2 h-10 rounded-lg bg-red-500 text-white hover:bg-red-600 transition hover:scale-95"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/2 h-10 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition hover:scale-95"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <span className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-gray-500 text-sm">or</span>
            <span className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline transition hover:scale-95"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
