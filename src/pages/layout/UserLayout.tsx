import  { useState } from 'react';

import {  Layout, } from 'antd';
import { Navigate, Outlet } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import UserHeader from '../../components/header/UserHeader';
import { type IMenuItem } from '../../config/menu-Item';
import { useAuth } from '../../context/authContext';
import { toast } from 'sonner';

const { Content } = Layout;

const UserLayout = ({menu}:Readonly<{menu:Array<IMenuItem>}>) => {
    const [collapsed, setCollapsed] = useState(false);
   
    const {loggedInUser} = useAuth()
    console.log(loggedInUser);
    
    if(loggedInUser)
    {
      return (
        <Layout className='h-screen'>
         <Sidebar collapsed={collapsed}  menu={menu}/>
          <Layout>
            <UserHeader collapsed={collapsed} setCollapsed={setCollapsed} />
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      );
    }
    else{
      toast.error("Please login first!!!")
      return <Navigate to="/" />
    }


  
}

export default UserLayout;