import { Navigate, Outlet } from "react-router";
import logo from "../../assets/images/logo.png";
import { useAuth } from "../../context/AuthContext";

const AuthLayout = () => {
  const {loggedInUser}=useAuth();
  if(loggedInUser)
    {
      return <Navigate to={`/${loggedInUser.role}`} />
    }
  return (
    
   
    <>
      <div className="flex w-full h-screen bg-gray-300 items-center justify-center">
        <div className="flex flex-col bg-gray-100 p-5 gap-5 w-full max-w-5xl mx-auto shadow-lg rounded-md">
          <div className="flex w-full my-4 items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;