import { NavLink, Link } from "react-router";

const ForgetPasswordForm = () => {
  return (
    <>
      <div className="flex flex-col border-b border-indigo-900 pb-2 text-center">
        <h1 className="text-3xl font-semibold text-indigo-950">
          Forget Password
        </h1>
      </div>

      <form className="flex flex-col gap-5 w-full">
        <div className="flex items-center gap-3">
          <label htmlFor="username" className="w-1/4 font-semibold">
            Username:
          </label>
          <input
            type="email"
            id="username"
            className="border border-gray-400 rounded-md shadow-lg hover:ring-1 w-3/4 h-10 px-2"
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="password" className="w-1/4 font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-400 rounded-md shadow-lg hover:ring-1 w-3/4 h-10 px-2"
          />
        </div>

        <div className="flex justify-end">
          <NavLink
            to="/forget-password"
            className="text-sm italic text-teal-700 hover:underline hover:cursor-pointer transition hover:scale-95"
          >
            Forget Password?
          </NavLink>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="bg-red-800 h-10 w-1/2 text-white rounded-lg hover:bg-red-900 transition hover:scale-95"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-teal-800 h-10 w-1/2 text-white rounded-lg hover:bg-teal-900 transition hover:scale-95"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="flex items-center my-2">
        <span className="flex-1 h-px bg-gray-300"></span>
        <span className="px-4 text-gray-900">or</span>
        <span className="flex-1 h-px bg-gray-300"></span>
      </div>

      <p className="text-center text-sm italic">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-teal-700 hover:underline hover:cursor-pointer transition hover:scale-95"
        >
          Register now!
        </Link>
      </p>
    </>
  );
};

export default ForgetPasswordForm;