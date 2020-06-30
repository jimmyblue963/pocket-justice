import React, { useState } from "react";
import { Menu } from "antd";
import "./sideNav.css";
import { HomeOutlined, ReadOutlined, TeamOutlined } from '@ant-design/icons';
import image1 from "./blm_logo_grey.png"

const SideNav = (props: any) => {
  // const [selected, setSelected] = useState("home");
  const fetchKey = () => {
    console.log(window.location.pathname);
    return [window.location.pathname];
  };
  return (
    <div style={{backgroundColor:"#001529"}}>
      <img src={image1} style={{width:"100px", height:"auto", paddingTop:"5%"}}/>
      <Menu
        onClick={props.handleNav}
        selectedKeys={fetchKey()}
        style={{ width: 256 , height:"100%"}}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="home" id="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="petitions" id="petitions" icon={<ReadOutlined />}>
          Petitions
        </Menu.Item>
        <Menu.Item key="about" id="about" icon={<TeamOutlined />}>
          About Us
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideNav;