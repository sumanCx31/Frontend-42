
import logo from "../../assets/images/logo.png"
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <>
       <div className="flex flex-col items-center justify-center w-full p-10">
        <div className="flex border-white rounded-4xl bg-white flex-col w-95 h-130 justify-center items-center mt-10 shadow-2xl">
          <div className="flex h-38">
            <img src={logo} alt="" className="h-40" />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AuthLayout
