import React, { useState } from 'react';

import {Button, Form, Input, Select} from "antd";
import './AddProduct.scss';
import InputField from "../InputFields";
import ProductService from "../../services/product.service";
import getServerPath from "../../util";
import {useLocation} from "react-router-dom";

const { Option } = Select;

const dvtArr = Array.of('cái', 'quyển', 'tờ', 'hộp');

const AddProduct = () => {



  const [idProduct, setIdProduct] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [dvt, setDvt] = useState(dvtArr);
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [form] = Form.useForm();

  const location = useLocation();
  const currentRoute = location.pathname.split('/')[1]

// const keys = productList.map((item, key) => {
//       return Object.keys((item));
//   })[0]

  const handleChangeOption = (value) => {
  setDvt([value])
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      idProduct: idProduct,
      nameProduct: nameProduct,
      dvt: `${dvt.toString()}`,
      country: country,
      price: price,
      amount: amount
    };
    console.log(newProduct);
    const res = await ProductService(getServerPath(currentRoute)).createProduct(newProduct)
    console.log(res);
  }
  return (
      <div className='add-form'>
        <Form>
          <InputField label="idProduct" data={idProduct} setData={setIdProduct} />
          <InputField label="nameProduct" data={nameProduct} setData={setNameProduct} />
          <InputField type="option" label="dvt" data={dvtArr} setData={setDvt} onChange={handleChangeOption} />
          <InputField label="country" data={country} setData={setCountry} />
          <InputField label="price" data={price} setData={setPrice} />
          <InputField label="amount" data={amount} setData={setAmount} />
          <Form.Item >
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

  );
};

export default AddProduct;