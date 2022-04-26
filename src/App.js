import logo from './logo.svg';
import 'antd/dist/antd.css';
import {Link, Route, Routes, useLocation} from "react-router-dom";
import HeaderComponent from "./components/Header";
import {useState} from "react";
import {Button, Layout} from "antd";
import SideMenu from "./components/SideMenu";
import AddProduct from "./components/AddProducts";
import Edit from "./components/Edit";
import CustomTable from "./components/CustomTableProduct";
import HomePage from "./pages";
import React from "react";


function App() {



  return (
      <Routes>
        <Route path="*" element={<HomePage />}/>
      </Routes>
  );
}

export default App;
