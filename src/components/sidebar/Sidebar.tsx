import logo from "../../assets/images/logo.png";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import type { IMenuItem } from "../../config/menu-Item";
import { useAuth } from "../../context/authContext";

const Sidebar = ({
  collapsed, // <-- destructured here
  menu,
}: Readonly<{ collapsed: boolean; menu: Array<IMenuItem>; }>) => {
  const { loggedInUser } = useAuth();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
      <div className="demo-logo-vertical flex gap-1 flex-col justify-center items-center">
        <img
          src={logo}
          alt=""
          className="h-20 mt-4 w-20 rounded-full border-2 border-white"
        />
        <div className="flex flex-col gap-1">
          <p className="text-center text-white font-semibold">
            {loggedInUser?.name}
          </p>
          <p className="text-center text-white font-bold text-xs">
            {loggedInUser?.email}
          </p>
        </div>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={menu} />
    </Sider>
  );
};

export default Sidebar;
