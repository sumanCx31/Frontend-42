import { NavLink } from "react-router";

const RegisterForm = () => {
  return (
   <>
   <h1 className="font-semibold text-xl">Register</h1>
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
              <div className="flex gap-2 p-1">
                <label htmlFor="username:">
                  Email:
                  <input
                    type="email"
                    className="border rounded-xl h-7 w-full border-gray-400 hover:ring-1 ring-green-500 text-center p-2"
                  />
                </label>
              </div>
              <div className="flex gap-2 p-1">
                <label htmlFor="username:">
                  Gender:
                  <input type="radio" name="gender" id="" className="mx-2"/>Male
                  <input type="radio" name="gender" id=""  className="mx-2"/>Female

                </label>
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
                <p className="mx-0">Already have an Account?</p>
                <NavLink
                  to="/"
                  className="text-blue-500 transition hover:scale-96 hover:underline font-mono hover:cursor-pointer"
                >
                  Sign In
                </NavLink>
              </div>
            </form>
          </div>
   </>
  )
}

export default RegisterForm
