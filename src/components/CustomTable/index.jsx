import React from 'react';
import {Table, Tag, Space, Breadcrumb, Layout, Button, Popconfirm} from 'antd';
import { useEffect, useState } from "react";
import axios from "axios";
import "./CustomTable.scss";
import HeaderComponent from "../Header";
import {Link} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const CustomTable = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get("http://192.168.1.2:3000/server/products");
        console.log(response);
        setLoading(false);
        setProductList(response.data);
      } catch (err) {
        console.log("Failed to fetch product list: ", err);
      }
    }
    fetchProductList();
  }, [])
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'dvt',
      dataIndex: 'dvt',
      key: 'dvt',
      render: text => <a>{text}</a>,
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'idProduct',
      dataIndex: 'idProduct',
      key: 'idProduct',
    },
    {
      title: 'country',
      key: 'country',
      dataIndex: 'country ',

    },
    {
      title: 'amount',
      key: 'amount',
      dataIndex: 'amount',
    },
    {
      title: 'nameProduct',
      key: 'nameProduct',
      dataIndex: 'nameProduct',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (

          <Popconfirm title="Are you sure to delete?" onConfirm={() => handleDelete(record.id)}>
            <a>Delete</a>
          </Popconfirm>
      ),
    },
  ];

  const handleDelete = async (id) => {
    console.log(id);
     await axios.delete(`http://192.168.1.2:3000/tram1/product/${id}`);
     setProductList(productList => productList.filter(item => item.id !== id));
  }

  return (
      <>
        {
          loading ? (
              "Loading"
          ) : (
              <>

                <Layout className="site-layout">


                  <Content style={{margin: '0 16px'}}>
                    <div className='header-table'>
                      <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                      </Breadcrumb>
                      <Link to="add-product"> <Button type="primary">Add Product</Button></Link>
                    </div>

                    <div className="site-layout-background" style={{
                      padding: 24,
                      minHeight: 360,
                    }}>
                      <Table columns={columns} dataSource={productList}  />
                    </div>
                  </Content>
                  <Footer
                      style={{
                        textAlign: 'center',
                      }}
                  >
                    Ant Design ©2018 Created by Ant UED
                  </Footer>
                </Layout>

              </>

          )
        }
      </>

  );
};

export default CustomTable;