import { createContext, useContext, useState } from "react";
import type { ReactNode, SetStateAction, Dispatch } from "react";
import type { Gender, Status, UserRoles } from "../config/constants";

type AuthProviderProps = {
  children: ReactNode;
};

export interface ILoggedInUserProfile {
  address: string;
  createdAt: Date;
  createdBy: null;
  dob: Date;
  email: string;
  gender: Gender;
  role: UserRoles;
  status: Status;
  phone: string;
  name: string;
  updatedAt: string;
  updatedBy: null;
  id: string;
}

export interface IAuthContext {
  loggedInUser: ILoggedInUserProfile | null;
  setLoggedInUserProfile: Dispatch<SetStateAction<ILoggedInUserProfile | null>>;
}

// Default context (with dummy function to avoid undefined access error)
export const AuthContext = createContext<IAuthContext>({
  loggedInUser: null,
  setLoggedInUserProfile: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loggedInUserProfile, setLoggedInUserProfile] = useState<ILoggedInUserProfile | null>(null);

  return (
    <AuthContext.Provider
      value={{
        loggedInUser: loggedInUserProfile,
        setLoggedInUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { loggedInUser,setLoggedInUserProfile } = useContext(AuthContext);
  return  {loggedInUser,setLoggedInUserProfile} ;
};
