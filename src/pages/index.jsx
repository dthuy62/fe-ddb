import React, {useState} from 'react';
import HeaderComponent from "../components/Header";
import {Layout, Tabs} from "antd";
import SideMenu from "../components/SideMenu";
import {Link, Route, Routes} from "react-router-dom";
import CustomTable from "../components/CustomTableProduct";
import AddProduct from "../components/AddProducts";
import Edit from "../components/Edit";
import CustomTableProduct from "../components/CustomTableProduct";
import CustomTableStaff from "../components/CustomTableStaff";
import AddStaff from "../components/AddStaff";
import EditStaff from "../components/EditStaff";


const {Sider} = Layout;
const {TabPane} = Tabs;

const HomePage = () => {

  const paths = ['station-one', 'station-two', 'server'];
  const [collapsed, setCollapsed] = useState(false);
  const callback = (key) => {
  }

  const [tram, setTram] = useState('SERVER')

  return (
      <>
        <HeaderComponent/>
        <Layout style={{minHeight: '100vh'}}>
          <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <div className="logo" style={{height: "64px"}}/>
            <SideMenu listener={setTram}/>
          </Sider>
          <div className='content' style={{width: "100%"}}>
            <Routes>
              {
                paths.map((item) => (
                    <>
                      <Route path={`${item}/products`} element={<CustomTableProduct/>}/>
                      <Route path={`${item}/staff`} element={<CustomTableStaff/>}/>

                      <Route path={`${item}/products/add`} element={<AddProduct/>}/>
                      <Route path={`${item}/staff/add`} element={<AddStaff />}/>

                      <Route path={`${item}/products/:id`} element={<Edit />}/>
                      <Route path={`${item}/staff/:id`} element={<EditStaff />}/>
                    </>

                ))
              }


            </Routes>

            {/*<Routes>*/}
            {/*  {*/}
            {/*    paths.map((item) => (*/}
            {/*        <Route path={`${item}`} element={<CustomTableProduct />}/>*/}
            {/*    ))*/}
            {/*  }*/}
            {/*  {*/}
            {/*    paths.map((item) => (*/}
            {/*        <>*/}
            {/*          <Route path={`${item}/add`} element={<AddProduct/>}/>*/}
            {/*          <Route path={`${item}/:id`} element={<Edit/>}/>*/}
            {/*        </>*/}

            {/*    ))*/}
            {/*  }*/}
            {/*</Routes>*/}
          </div>
        </Layout>
      </>

  );
};

export default HomePage;