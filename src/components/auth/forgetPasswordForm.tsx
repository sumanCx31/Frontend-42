

const ForgetPasswordForm = () => {
  return (
   <>
   <h1 className="font-semibold text-xl">Forget Password Page</h1>
     <div className="flex w-60 gap-4 items-center">
            <form
              action="/"
              className="flex flex-col font-semibold text-sm p-4"
            >
              <div className="flex w-full gap-2 p-1">
                <label htmlFor="password:">
                  Password:
                  <input
                    type="password"
                    className="border rounded-xl text-center p-2 h-7 w-full border-gray-400 hover:ring-1 ring-green-500"
                  />
                </label>
              </div>
              <div className="flex w-full gap-2 p-1">
                <label htmlFor="new-password:">
                  New Password:
                  <input
                    type="password"
                    className="border rounded-xl text-center p-2 h-7 w-full border-gray-400 hover:ring-1 ring-green-500"
                  />
                </label>
              </div>
              <div className="flex w-full gap-2 p-1">
                <label htmlFor="Confirm-password:">
                  Confirm Password:
                  <input
                    type="password"
                    className="border rounded-xl text-center p-2 h-7 w-full border-gray-400 hover:ring-1 ring-green-500"
                  />
                </label>
              </div>
             
                <div className="flex justify-center py-4">
                  <button className="h-7 w-25 bg-teal-500  border-amber-50 rounded-xl transition hover:scale-96 hover:bg-teal-600 text-white">
                    Submit
                  </button>
                </div>
                <div className="flex justify-center py-4">
                  <button className="h-7 w-30 bg-blue-500  border-amber-50 rounded-xl transition hover:scale-96 hover:bg-blue-600 text-white">
                   <a href="/" className=""> Back To Login</a>
                  </button>
                </div>
            </form>
          </div>
   </>
  )
}

export default ForgetPasswordForm
