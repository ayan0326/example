import { React } from "react";
import { Layout, Menu } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { Link } from "react-router-dom";
import "./BaseMenu.css";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const BaseMenu = () => {
  return (
    <Sider trigger={null}>
      <div className="logo">CENTS</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
        <Menu.Item key="SystemPage" icon={<TeamOutlined />}>
          <Link to="/">系统配置</Link>
        </Menu.Item>

        <SubMenu key="sub2" icon={<TeamOutlined />} title="用户管理">
          <Menu.Item key="orderManagePage">
            <Link to="/OrderManagePage">账户管理</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="auditPage" icon={<TeamOutlined />}>
          <Link to="/AuditPage">审核</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default BaseMenu;
