import { Header } from "antd/es/layout/layout";
import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
 

const UserHeader = ({collapsed, setCollapsed}:Readonly<{collapsed: boolean, setCollapsed: Function}>) => {
    return(
        <>
          <Header style={{ padding: 0 }} className="bg-gray-300!">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        </>
    )
}

export default UserHeader;