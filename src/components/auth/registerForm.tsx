import { Link, useNavigate } from "react-router";
import { RegisterDefault, RegisterDTO, type IRegisterUser } from "./contract";
import {
  EmailInput,
  PasswordInput,
  RadioButtonField,
  SelectOptionsField,
  SingleFileUpload,
  TextInput,
} from "../form/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import authSvc from "../../service/auth.service";


const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: RegisterDefault as IRegisterUser,
    resolver: yupResolver(RegisterDTO) as any,
  });
  const submitRegisterData = async (data: IRegisterUser) => {
    try {
      const response = await authSvc.registerUser(data)
      toast.success(response.message);
      navigate("/");
    } catch (exception: any) {
      if (exception.error) {
        Object.keys(exception.error).map((field) => {
          setError(field as keyof IRegisterUser, { message: exception.error[field] });
        })
      }
      toast.error("Sorry! Cannot register user at this moment.", {
        description: "Seems like there is an issue with the server. Please try again later.",
      })
    }
  };
  return (
    <>
      <div className="flex flex-col  border-b border-indigo-900 pb-2 text-center">
        <h1 className="text-4xl font-semibold text-indigo-950">
          Register Page
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(submitRegisterData)}
        className="flex flex-col gap-5 w-full"
      >
        <div className="flex items-center gap-3">
          <label htmlFor="fullname" className="w-1/4 font-semibold">
            FullName:
          </label>
          <TextInput
            name="fullname"
            control={control}
            errMsg={errors.fullname?.message}
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="email" className="w-1/4 font-semibold">
            Email:
          </label>
          <EmailInput
            name="email"
            control={control}
            errMsg={errors.email?.message}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="password" className="w-1/4 font-semibold">
            Password:
          </label>
          <PasswordInput
            name="password"
            control={control}
            errMsg={errors.password?.message}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="confirmPassword" className="w-1/4 font-semibold">
            Re-Password:
          </label>
          <PasswordInput
            name="confirmPassword"
            control={control}
            errMsg={errors.confirmPassword?.message}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="role" className="w-1/4 font-semibold">
            Role:
          </label>
          <SelectOptionsField
            name="role"
            control={control}
            errMsg={errors.role?.message}
            options={[
              { label: "Customer", value: "customer" },
              { label: "Seller", value: "seller" },
            ]}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="gender" className="w-1/4 font-semibold">
            Gender:
          </label>
          <RadioButtonField
            name="gender"
            control={control}
            errMsg={errors.gender?.message}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="phone" className="w-1/4 font-semibold">
            Phone:
          </label>
          <TextInput
            name="phone"
            control={control}
            errMsg={errors.phone?.message}
          />
        </div>
        {/* <div className="flex items-center gap-3">
          <label htmlFor="image" className="w-1/4 font-semibold">
            Image:
          </label>
          <SingleFileUpload
            name="image"
            control={control}
            errMsg={errors.image?.message as string}
          />
        </div> */}
        <div className="flex gap-3">
          <button
            disabled={isSubmitting}
            type="button"
            className="bg-red-800 h-10 w-1/2 text-white rounded-lg hover:bg-red-900 transition hover:scale-95 disabled:bg-red-800/20 disabled:cursor-not-allowed "
          >
            Cancel
          </button>
          <button
            disabled={isSubmitting} 
            type="submit"
            className="bg-teal-800 h-10 w-1/2 text-white rounded-lg hover:bg-teal-900 transition hover:scale-95 disabled:bg-teal-800/20 disabled:cursor-not-allowed"
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
        Already registered?
        <Link
          to="/"
          className="text-teal-700 hover:underline hover:cursor-pointer transition hover:scale-95"
        >
          Login Here
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;