import React, {useState} from 'react';
import Input from "../InputFields";
import {Button, Form} from "antd";
import {useLocation, useParams} from "react-router-dom";
import InputField from "../InputFields";
import './Edit.scss';
import axios from "axios";
import ProductService from "../../services/product.service";
import getServerPath from "../../util";

const Edit = () => {

  const location = useLocation();
  const {id} = useParams();

  const currentRoute = location.pathname.split('/')[1]
  const data = location.state.record;
  console.log(data);
  const dvtArr = Array.of('cái', 'quyển', 'tờ', 'hộp');

  const [idProduct, setIdProduct] = useState(data.idProduct);
  const [nameProduct, setNameProduct] = useState(data.nameProduct);
  const [dvt, setDvt] = useState([...dvtArr, data.dvt]);
  // console.log(dvt);
  const [country, setCountry] = useState(data.country);
  const [price, setPrice] = useState(data.price);
  const [amount, setAmount] = useState(data.amount);

  const handleChangeOption = (value) => {
    setDvt([value])
  };

  const handleUpdate = async () => {

    const newProduct = {
      id: data.id,
      idProduct: idProduct,
      nameProduct: nameProduct,
      dvt: `${dvt.toString()}`,
      country: country,
      price: price,
      amount: amount,
      uuid: data.uuid
    };
    console.log(newProduct);
    const res = await ProductService(getServerPath(currentRoute)).editProduct(newProduct, id);
    console.log(res);
  }
  return (
      <div className='edit-form'>
        <Form>
          <InputField station={currentRoute} disabled="disabled" label="idProduct" data={idProduct} setData={setIdProduct} />
          <InputField  label="nameProduct" data={nameProduct} setData={setNameProduct} />
          <InputField value={data.dvt} type="option" label="dvt" data={dvtArr} setData={setDvt} onChange={handleChangeOption} />
          {/*{*/}
          {/*  currentRoute === 'server'*/}
          {/*      ? (*/}
          {/*          <InputField  type="option" label="dvt" data={dvtArr}*/}
          {/*                       setData={setDvt} onChange={handleChangeOption} />*/}
          {/*      ) : currentRoute === 'station-one' ? (*/}
          {/*          <InputField disabled="disabled" label="dvt" data={data.branchCode}*/}
          {/*                      setData={setDvt}  />*/}
          {/*      ) : (*/}
          {/*          <InputField disabled="disabled" label="dvt" data={data.branchCode}*/}
          {/*                      setData={setDvt}  />*/}
          {/*      )*/}
          {/*}*/}
          <InputField label="country" data={country} setData={setCountry} />
          <InputField  label="price" data={price} setData={setPrice} />
          <InputField  label="amount" data={amount} setData={setAmount} />
          <Form.Item >
            <Button type="primary" htmlType="submit" onClick={handleUpdate}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>

  );
};

export default Edit;