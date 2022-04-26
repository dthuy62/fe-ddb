import React, {useState} from 'react';
import {Button, Form} from "antd";
import InputField from "../InputFields";
import {useLocation, useParams} from "react-router-dom";
import ProductService from "../../services/product.service";
import getServerPath from "../../util";
import StaffService from "../../services/staff.service";

const branchCodeList = Array.of('CN1', 'CN2');

const EditStaff = () => {

  const location = useLocation();
  const {id} = useParams();

  const currentRoute = location.pathname.split('/')[1]
  const data = location.state.record;

  const [staffId, setStaffId] = useState(data.staffId);
  const [staffName, setStaffName] = useState(data.staffName);
  const [dob, setDob] = useState(data.dob)
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
  const [salary, setSalary] = useState(data.salary);
  const [branchCode, setBranchCode] = useState([data.branchCode]);

  const handleChangeOption = (value) => {
    setBranchCode([value])
  };
  const handleUpdate = async () => {

    const newProduct = {
      id: data.id,
      staffId: staffId,
      staffName: staffName,
      phoneNumber: phoneNumber,
      dob: dob,
      salary: salary,
      branchCode: `${branchCode.toString()}`,
      uuid: data.uuid
    };
    console.log(newProduct);
    const res = await StaffService(getServerPath(currentRoute)).editStaff(newProduct, id);
    console.log(res);
  }

  return (
      <div className='edit-form'>
        <Form>
          <InputField station={currentRoute} disabled="disabled" label="staffId" data={staffId} setData={setStaffId} />
          <InputField  label="staffName" data={staffName} setData={setStaffName} />
          {
            currentRoute === 'server'
                ? (
                <InputField value={data.branchCode}  type="option" label="branchCode" data={['CN1', 'CN2']}
                             setData={setBranchCode} onChange={handleChangeOption} />
            ) : currentRoute === 'station-one' ? (
                    <InputField disabled="disabled" label="branchCode" data={data.branchCode}
                                 setData={setBranchCode}  />
                ) : (
                    <InputField disabled="disabled" label="branchCode" data={data.branchCode}
                                setData={setBranchCode}  />
                )
          }
         <InputField label="dob" data={dob} setData={setDob} />
          <InputField  label="phoneNumber" data={phoneNumber} setData={setPhoneNumber} />
          <InputField  label="salary" data={salary} setData={setSalary} />
          <Form.Item >
            <Button type="primary" htmlType="submit" onClick={handleUpdate}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
  );
};

export default EditStaff;