import { createContext, useContext } from "react";
import type { ReactNode } from "react";

export const AuthContext = createContext({
  loggedInUser: null,
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthContext.Provider
      value={{
        loggedInUser: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const { loggedInUser } = useContext(AuthContext);
    return { loggedInUser };
}