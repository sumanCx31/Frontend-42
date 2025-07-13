import { NavLink } from "react-router";

const ErrorNotFound = () => {
  return (
    <>
      <div className="flex w-full h-screen bg-gray-300 items-center justify-center">
        <div className="flex flex-col bg-gray-100 p-5 gap-5 max-w-xl mx-auto shadow-lg shadow-red-800 rounded-md">
          <div className="flex w-xl gap-5 flex-col  pb-2">
            <div className="text-center">
              <p className="text-base font-semibold text-red-800">404</p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-gray-900">
                Page not found
              </h1>
              <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <NavLink
                  to="/"
                  className="rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go back home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorNotFound;