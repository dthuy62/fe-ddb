import React from 'react';
import {Breadcrumb, Button, Layout, Popconfirm, Space, Table} from "antd";
import {Link, useLocation} from "react-router-dom";
import ProductService from "../../services/product.service";
import {useEffect, useState} from "react";
import getServerPath from "../../util";
import StaffService from "../../services/staff.service";

const { Content } = Layout;

const CustomTableStaff = () => {
  const location = useLocation();
  const currentRoute = location.pathname.split('/')[1]
  // console.log(currentRoute)

  const [staffList, setStaffList] = useState([]);


  useEffect(() => {
    const fetchStaffList = async () => {
      try {
        const response = await StaffService(getServerPath(currentRoute)).getAll();
        console.log(response);
        setStaffList(response.data)
      } catch (err) {
        console.log("Failed to fetch product list: ", err);
      }
    }
    fetchStaffList();
  }, [])
  const columnsStaff = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      defaultSortOrder: 'ascend',sorter: (a, b) => a.id - b.id,
      sortDirections: ['ascend'],
      render: text => <a>{text}</a>,
    },
    {
      title: 'staffId',
      dataIndex: 'staffId',
      key: 'staffId',
      render: text => <a>{text}</a>,
    },
    {
      title: 'staffName',
      dataIndex: 'staffName',
      key: 'staffName',
    },
    {
      title: 'phoneNumber',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'salary',
      key: 'salary',
      dataIndex: 'salary',

    },
    {
      title: 'branchCode',
      key: 'branchCode',
      dataIndex: 'branchCode',
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
    console.log(id);
    await StaffService(getServerPath(currentRoute)).deleteStaff(id);
    setStaffList(staffList => staffList.filter(item => item.id !== id));
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
            minHeight: 360,
          }}>
            <Table columns={columnsStaff} dataSource={staffList}  />
          </div>
        </Content>
      </Layout>
  );
};

export default CustomTableStaff;