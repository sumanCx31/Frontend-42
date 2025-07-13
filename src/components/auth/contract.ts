import * as Yup from "yup";
import type { Gender, UserRoles } from "../../config/constants";
import { UserRoles as UserRoleValue} from "../../config/constants";

export interface ICredentials {
  email: string,
  password: string
}

export interface IRegisterUser {
  fullname: string,
  email: string,
  password: string,
  confirmPassword: string,
  role: UserRoles,
  gender: Gender | null,
  phone: string | null,
  // address?: {
  //   billingAddress: string,
  //   shippingAddress: string
  // },
  // dob?: Date | null,
  // image:any
}

export const CredentialsDTO=Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required")
})

// const passwordRegax = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@$!%*?&()_+-=.,<>]).{8,25}$/;


export const RegisterDTO = Yup.object({
  fullname: Yup.string().min(2).max(30).required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required(),
  role: Yup.string().matches(/^(customer|seller)$/).default('customer'),
  gender: Yup.string().matches(/^(male|female|other)$/).nullable(),
  phone: Yup.string().nullable(),
  // dob: Yup.date().nullable(),
  // image: Yup.mixed().nullable()
})



export const RegisterDefault = {
  fullname: "",
 email: "",
 password: "",
 confirmPassword: "",
  role: UserRoleValue.CUSTOMER,
  gender: null,
  phone: "",
//  image: null,
}