import { useState } from "react";
import { Layout } from "antd";
import { Navigate, Outlet } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import UserHeader from "../../components/header/UserHeader";
import { type IMenuItem } from "../../config/menu-Item";
import { useAuth } from "../../context/authContext";
import { toast } from "sonner";
import { UserRoles } from "../../config/constants";

const { Content } = Layout;

interface IUserLayoutProps {
  menu: Array<IMenuItem>;
  role: UserRoles;   // ✅ added role support
}

const UserLayout = ({ menu, role }: Readonly<IUserLayoutProps>) => {
  const [collapsed, setCollapsed] = useState(false);
  const { loggedInUser } = useAuth();

  if (!loggedInUser) {
    toast.error("Please login first!!!");
    return <Navigate to="/" />;
  }

  return (
    <Layout className="h-screen">
      <Sidebar menu={menu} collapsed={collapsed} />
      <Layout>
        <UserHeader />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {/* ✅ Show role name on dashboard */}
          <h2 className="font-semibold text-xl mb-4">
            {role} Dashboard
          </h2>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
