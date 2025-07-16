import logo from "../assets/image/logo.jpg";
import Loginform from "../components/auth/loginForm";

export interface ICredentials {
  email: string;
  password: string;
}

const HomePage = () => {

  return (
    <>
      <div className="flex w-full h-screen bg-gray-300 items-center justify-center">
        <div className="flex flex-col bg-gray-100 p-5 gap-5 w-full max-w-md mx-auto shadow-lg rounded-md">
          <div className="flex w-full my-4 items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <Loginform />
        </div>
      </div>
    </>
  );
};

export default HomePage;