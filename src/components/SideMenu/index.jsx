import React, {useState} from 'react';

import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import {UserOutlined} from "@ant-design/icons";

const { SubMenu } = Menu;

const SideMenu = () => {
  const { pathname } = useLocation();



  return (
      <>
        <Menu
            defaultOpenKeys={['1']}
            defaultSelectedKeys={['1']}
            mode="inline"
        >
          <SubMenu key="1" title="Station 1">
            <Menu.Item key="2"><NavLink to="/station-one/products"></NavLink>Products</Menu.Item>
            <Menu.Item key="3"><NavLink to="/station-one/staff"></NavLink>Staff</Menu.Item>
          </SubMenu>
          <SubMenu key="2" title="Station 2">
            <Menu.Item key="4"><NavLink to="/station-two/products"></NavLink>Products</Menu.Item>
            <Menu.Item key="5"><NavLink to="/station-two/staff"></NavLink>Staff</Menu.Item>
          </SubMenu>
          <SubMenu key="3" title="Server">
            <Menu.Item key="6"><NavLink to="/server/products"></NavLink>Products</Menu.Item>
            <Menu.Item key="7"><NavLink to="/server/staff"></NavLink>Staff</Menu.Item>
          </SubMenu>
        </Menu>

      </>
  );
}

export default SideMenu;