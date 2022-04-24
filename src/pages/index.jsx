import React, {useState} from 'react';
import Add from "../components/Add";
import {Routes, Route} from 'react-router-dom';
import HeaderComponent from "../components/Header";
import SideMenu from "../components/SideMenu";
import CustomTable from "../components/CustomTable";
import "./Dasdboard.scss";

import {Layout} from 'antd';
import AddProduct from "../components/Add";


const {Sider} = Layout;


const Dasdboard = () => {

  const [collapsed, setCollapsed] = useState(false);


  return (

      <>
        {/*<Layout style={{minHeight: '100vh'}}>*/}
        {/*  <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>*/}
        {/*    <div className="logo" style={{height: "64px"}}/>*/}
        {/*    <SideMenu/>*/}
        {/*  </Sider>*/}
        {/*  <CustomTable/>*/}
        {/*</Layout>*/}


      </>


  );
};

export default Dasdboard;