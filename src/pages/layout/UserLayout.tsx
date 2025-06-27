


import { Layout, theme } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../../components/sidebar/Sidebar';
import UserHeader from '../../components/header/UserHeader';
import { type IMenuItem} from '../../config/menu-Item';

const { Content } = Layout;

const UserLayout= ({menu}:Readonly<{menu:Array<IMenuItem>}>) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { borderRadiusLG },
    } = theme.useToken();
  
    return (
      <>
        <Layout className='h-screen'>
        <Sidebar collapsed = {collapsed} menu={menu}/>
        <Layout >
        <UserHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
          <Content
          className='bg-gray-300'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>   
      </>
    );
  };
export default UserLayout;

