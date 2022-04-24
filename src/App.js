import './App.css';
import 'antd/dist/antd.css';
import {Routes, Route} from 'react-router-dom';
import Dasdboard from "./pages";
import {useEffect, useState} from "react";
import productApi from "./services/API/productApi";
import axios from "axios";
import AddProduct from "./components/Add";
import React from "react";
import HeaderComponent from "./components/Header";
import SideMenu from "./components/SideMenu";
import {Layout} from "antd";
import CustomTable from "./components/CustomTable";

const {Sider} = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);

  return (
      <>
        <HeaderComponent />
        <Layout style={{minHeight: '100vh'}}>
          <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <div className="logo" style={{height: "64px"}}/>
            <SideMenu/>
          </Sider>
          <Routes>
            <Route path="/" element={<CustomTable/>}/>
            <Route path="/add-product" element={<AddProduct/>}/>
          </Routes>
        </Layout>

      </>

  );
}

export default App;
