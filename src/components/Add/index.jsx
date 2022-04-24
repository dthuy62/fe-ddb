import React, {useState} from 'react';
import {Button, Form, Input, Select, TreeSelect} from "antd";
import './AddProduct.scss';
import axios from "axios";

const AddProduct = () => {
  const [idProduct, setIdProduct] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [dvt, setDvt] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [soluonglon, setSoluonglon] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct  = {
      idProduct: idProduct,
      nameProduct: nameProduct,
      dvt: dvt,
      country: country,
      price: price,
      soluonglon: soluonglon
    }
    console.log(newProduct);
    await axios.post("http://192.168.1.2:3000/tram1/products", newProduct);
    setIdProduct("");
    setNameProduct("");
    setSoluonglon("");
    setDvt("");
    setPrice("");
    setCountry("");
  }

  return (
      <div className='add-product'>
        <Form layout="horizontal" >
          <Form.Item label="ID">
            <Input value={idProduct} onChange={(e) => setIdProduct(e.target.value)}/>
          </Form.Item>
          <Form.Item label="NAME">
            <Input value={nameProduct} onChange={(e) => setNameProduct(e.target.value)}/>
          </Form.Item>
          <Form.Item label="DVT">
            <Input value={dvt} onChange={(e) => setDvt(e.target.value)}/>
          </Form.Item>
          <Form.Item label="COUNTRY">
            <Input value={country} onChange={(e) => setCountry(e.target.value)}/>
          </Form.Item>
          <Form.Item label="PRICE">
            <Input value={price} onChange={(e) => setPrice(e.target.value)}/>
          </Form.Item>
          <Form.Item label="SOLUONGTON">
            <Input value={soluonglon} onChange={(e) => setSoluonglon(e.target.value)}/>
          </Form.Item>
          <Form.Item>
            <Button onClick={handleSubmit} type="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
  );
};

export default AddProduct;