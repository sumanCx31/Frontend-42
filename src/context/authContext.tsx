import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode, SetStateAction, Dispatch } from "react";
import type { Gender, Status, UserRoles } from "../config/constants";

type AuthProviderProps = {
  children: ReactNode;
};

export interface ILoggedInUserProfile {
  image: any;
  address: string;
  createdAt: string;
  createdBy: string | null;
  dob: string;
  email: string;
  gender: Gender;
  role: UserRoles;
  status: Status;
  phone: string;
  name: string;
  updatedAt: string;
  updatedBy: string | null;
  id: string;
}

export interface IAuthContext {
  loggedInUser: ILoggedInUserProfile | null;
  setLoggedInUserProfile: Dispatch<SetStateAction<ILoggedInUserProfile | null>>;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // ✅ Load from localStorage on init
  const [loggedInUser, setLoggedInUserProfile] = useState<ILoggedInUserProfile | null>(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // ✅ Save to localStorage whenever user changes
  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [loggedInUser]);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
