import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography } from "antd";
import { useForm } from "react-hook-form";
import { NavLink, Link } from "react-router"; 
import { EmailInput, PasswordInput } from "../form/FormInput";
import type { ICredentials } from "./contract";
import { CredentialsDTO } from "./contract";
import authSvc from "../../service/auth.service";
import { useNavigate } from "react-router"; // ✅ correct import
import { toast } from "sonner";
import { useAuth } from "../../context/authContext";
// import { useAuth } from "../../context/AuthContext";

const Loginform = () => {
  const navigate = useNavigate(); 
  
  const { control, handleSubmit, formState: { errors } } = useForm<ICredentials>({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: yupResolver(CredentialsDTO)
  });

  const { setLoggedInUserProfile } = useAuth();
  
  const submitForm = async (credentials: ICredentials) => {
    try {
      const response = await authSvc.loginUser(credentials)
      const userProfileResponse = await authSvc.getLoggedInProfile()
      console.log(userProfileResponse);
      
      toast.success("Welcome to "+userProfileResponse.data.role+" panel!!!",{description:"You can access to different panel from here!!!"});
      const userRole = userProfileResponse.data.role;

      setLoggedInUserProfile(userProfileResponse.data)
      navigate("/"+userRole);
      console.log("response:"+response);

    } catch (exception) {
      console.error({ exception });
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col w-full gap-5 border-b border-indigo-900 pb-2">
        <Typography.Title level={1} className="text-indigo-950 text-shadow-md text-shadow-indigo-400">
          Login Page
        </Typography.Title>
      </div>

      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5 w-full">
        <div className="flex w-full gap-7">
          <label htmlFor="username" className="w-1/4 font-semibold">
            Username:
          </label>
          <div className="w-3/4">
            <EmailInput control={control} name="email" errMsg={errors?.email?.message as string} />
          </div>
        </div>

        <div className="flex w-full gap-7">
          <label htmlFor="password" className="w-1/4 font-semibold">
            Password:
          </label>
          <div className="w-3/4">
            <PasswordInput control={control} name="password" errMsg={errors?.password?.message as string} />
          </div>
        </div>

        <div className="flex justify-end">
          <NavLink to="/forget-password" className="text-sm italic text-teal-700 hover:underline hover:cursor-pointer transition hover:scale-95">
            Forget Password?
          </NavLink>
        </div>

        <div className="flex gap-5 w-full">
          <Button
            variant="solid"
            size="large"
            htmlType="reset"
            className="w-full bg-red-800! border-red-800! hover:bg-red-900 transition hover:scale-95 text-white!"
          >
            Cancel
          </Button>
          <Button
            variant="solid"
            size="large"
            htmlType="submit"
            className="w-full bg-teal-800! border-teal-800! hover:bg-teal-900 transition hover:scale-95 text-white!"
          >
            Submit
          </Button>
        </div>
      </form>

      <div className="flex items-center my-2">
        <span className="flex-1 h-px bg-gray-300"></span>
        <span className="px-4 text-gray-900">or</span>
        <span className="flex-1 h-px bg-gray-300"></span>
      </div>

      <p className="text-center text-sm italic">
        Don't have an account?{" "}
        <Link to="/register" className="text-teal-700 hover:underline hover:cursor-pointer transition hover:scale-95">
          Register now!
        </Link>
      </p>
    </>
  );
};

export default Loginform;
