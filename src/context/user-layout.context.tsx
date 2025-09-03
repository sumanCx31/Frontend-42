import { createContext,  useContext, useState, type Dispatch, type SetStateAction } from "react";

interface IUserLayoutContext {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
}

interface IUserLayoutProviderProps {
    children: React.ReactNode;
}

export const UserLayoutContext = createContext<IUserLayoutContext>({
    collapsed: false,
    setCollapsed: () => {},
})

export const UserLayoutProvider = ({children}:IUserLayoutProviderProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (<>
    <UserLayoutContext.Provider value={{
        collapsed: collapsed,
        setCollapsed: setCollapsed,
    }}>
        {children}
    </UserLayoutContext.Provider>
    </>)
}

export const useUserLayout = () => {
    const {collapsed,setCollapsed} = useContext(UserLayoutContext)
    return {collapsed,setCollapsed};
}