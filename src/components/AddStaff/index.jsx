import React, { useState } from 'react';

import {Button, Form, Input, Select} from "antd";
import './AddProduct.scss';
import InputField from "../InputFields";
import ProductService from "../../services/product.service";
import getServerPath from "../../util";
import {useLocation} from "react-router-dom";
import StaffService from "../../services/staff.service";

const { Option } = Select;

const branchCodeList = ['CN1', 'CN2'];
const branchCN1 = ['CN1'];
const branchCN2 = ['CN2'];


const AddStaff = () => {



  const [staffId, setStaffId] = useState("");
  const [staffName, setStaffName] = useState("");
  const [dob, setDob] = useState('2019-04-13T00:00:00.000Z')
  const [phoneNumber, setPhoneNumber] = useState("");
  const [salary, setSalary] = useState("");
  const [branchCode, setBranchCode] = useState(branchCodeList);



  const [form] = Form.useForm();

  const location = useLocation();
  const currentRoute = location.pathname.split('/')[1]

  const handleChangeOption = (value) => {
    setBranchCode([value])
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStaff = {
      staffId: staffId,
      staffName: staffName,
      branchCode: `${branchCode.toString()}`,
      phoneNumber: phoneNumber,
      dob: dob,
      salary: salary,
    };
    console.log(newStaff);
    const res = await StaffService(getServerPath(currentRoute)).addStaff(newStaff);
    console.log(res);
  }
  return (
      <div className='add-form'>
        <Form>
          <InputField label="staffId" data={staffId} setData={setStaffId} />
          <InputField label="staffName" data={staffName} setData={setStaffName} />
          <InputField label="phoneNumber" data={phoneNumber} setData={setPhoneNumber} />
          <InputField label="salary" data={salary} setData={setSalary} />
          <InputField label="dob" data={dob} setData={setDob} />
          {
            currentRoute === 'server'
                ? (
                    <InputField  type="option" label="branchCode" data={branchCodeList}
                                 setData={setBranchCode} onChange={handleChangeOption} />
                ) : currentRoute === 'station-one' ? (
                    <InputField type="option"  disabled="disabled" label="branchCode" data={branchCN1}
                                setData={branchCN1}  onChange={handleChangeOption} />
                ) : (
                    <InputField type="option" disabled="disabled" label="branchCode" data={branchCN2}
                                setData={branchCN1} onChange={handleChangeOption}  />
                )
          }

          <Form.Item >
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>

  );
};

export default AddStaff;