import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import axios from "axios";
import {Breadcrumb, Button, Layout, Popconfirm, Space, Table} from "antd";
import './CustomTable.scss';
import ProductService from "../../services/product.service";
import getServerPath from "../../util";

const { Content } = Layout;

const CustomTableProduct = () => {

  const [productList, setProductList] = useState([]);
  // const keys = productList.map((item, key) => {
  //     return Object.keys((item));
  // })[0]
  const location = useLocation()
  const currentRoute = location.pathname.split('/')[1]


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await ProductService(getServerPath(currentRoute)).getAll();
        console.log(response);
        setLoading(false);
        setProductList(response.data);
      } catch (err) {
        console.log("Failed to fetch product list: ", err);
      }
    }
    fetchProductList();
  }, [])
  const columnsProduct = [
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
      dataIndex: 'country',

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
          <Space>
            <Popconfirm title="Are you sure to delete?" onConfirm={() => handleDelete(record.id)}>
              <Button type="primary" danger>Delete</Button>
            </Popconfirm>
            <Link to={`${record.id}`} state={{record}}><Button>Edit</Button></Link>
          </Space>

      ),
    },
  ];



  const handleDelete = async (id) => {
    await ProductService(getServerPath(currentRoute)).deleteProduct(id);

    setProductList(productList => productList.filter(item => item.id !== id));
  }
  return (
      <Layout className="site-layout">
        <Content style={{margin: '0 16px'}}>
          <div className='header-table'>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Link className="add-btn" to={`add`}><Button>Add</Button></Link>
          </div>

          <div className="site-layout-background" style={{
            padding: 24,
            minHeight: 360,}}>
            <Table columns={columnsProduct} dataSource={productList} />
          </div>
        </Content>
      </Layout>
  );
};

export default CustomTableProduct;