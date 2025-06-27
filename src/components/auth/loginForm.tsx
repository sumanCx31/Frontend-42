import { NavLink } from "react-router";
// import AuthLayout from "../../pages/layout/AuthLayout";
// import AuthLayout from "../../pages/layout/AuthLayout";

const LoginForm = () => {
  return (
   <>
   <h1 className="font-semibold text-xl">Login</h1>
     <div className="flex w-60 gap-4 items-center">
            <form
              action="/"
              className="flex flex-col font-semibold text-sm p-4"
            >
              <div className="flex gap-2 p-1">
                <label htmlFor="username:">
                  Username:
                  <input
                    type="text"
                    className="border rounded-xl h-7 w-full border-gray-400 hover:ring-1 ring-green-500 text-center p-2"
                  />
                </label>
              </div>
              <div className="flex w-full gap-2 p-1">
                <label htmlFor="password:">
                  Password:
                  <input
                    type="password"
                    className="border rounded-xl text-center p-2 h-7 w-full border-gray-400 hover:ring-1 ring-green-500"
                  />
                </label>
              </div>
              <div className="flex justify-end py-2">
                <NavLink to="forget-password" className="text-blue-500 hover:underline transition hover:scale-96 hover:cursor-pointer font-mono">forget password?</NavLink>
              </div>
              <div className="flex gap-6 py-4">
                <div>
                  <button className="h-7 w-25 bg-red-500 border-amber-50 rounded-xl transition hover:scale-96 hover:bg-red-600 text-white">
                    Cancel
                  </button>
                </div>
                <div>
                  <button className="h-7 w-25 bg-teal-500  border-amber-50 rounded-xl transition hover:scale-96 hover:bg-teal-600 text-white">
                    Submit
                  </button>
                </div>
              </div>
              <div className="flex">
                <p className="mx-1">Don't have an Account?</p>
                <NavLink
                  to="/register"
                  className="text-blue-500 transition hover:scale-96 hover:underline font-mono hover:cursor-pointer"
                >
                  Register
                </NavLink>
              </div>
            </form>
          </div>
   </>
  )
}

export default LoginForm
