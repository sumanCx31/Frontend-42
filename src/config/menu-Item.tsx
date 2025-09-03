import {
  ApartmentOutlined,
  BoldOutlined,
  DollarOutlined,
  FileImageOutlined,
  HomeOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  ShoppingFilled,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router";

export const AdminMenu = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <FileImageOutlined />,
    label: "Banner",
  },
  {
    key: "3",
    icon: <BoldOutlined />,
    label: "Brand",
  },
  {
    key: "4",
    icon: <ApartmentOutlined />,
    label: "Category",
  },
  {
    key: "5",
    icon: <UserOutlined />,
    label: "Users",
  },
  {
    key: "6",
    icon: <ShoppingFilled />,
    label: "Product",
  },
  {
    key: "7",
    icon: <ShoppingCartOutlined />,
    label: "Orders",
  },
  {
    key: "8",
    icon: <DollarOutlined />,
    label: "Transactions",
  },
  {
    key: "9",
    icon: <MessageOutlined />,
    label: <NavLink to={"/admin/chat"}>Chat</NavLink>,
  },
];

export const SellerMenu = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Dashboard",
  },
  {
    key: "6",
    icon: <ShoppingFilled />,
    label: "Product",
  },
  {
    key: "7",
    icon: <ShoppingCartOutlined />,
    label: "Orders",
  },
  {
    key: "9",
    icon: <MessageOutlined />,
    label: <NavLink to={"/seller/chat"}>Chat</NavLink>,
  },
];

export interface IMenuItem {
    key:string,
    icon:React.ReactNode,
    label:string
}
