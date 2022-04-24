import React from 'react';
import {Link} from "react-router-dom";
import {Layout} from "antd";
import './Header.scss';


const HeaderComponent = () => {
  return (
      <Layout.Header className="header">
       <ul className="header__content">
         <li>User</li>
         <li>Server</li>
         <li>Còn một cái đang là noname</li>
       </ul>
      </Layout.Header>
  );
};

export default HeaderComponent;