import React, {useState} from 'react';
import {Form, Input, Button, Select} from 'antd';

const {Option} = Select;


const InputField = (props) => {
  const {data, setData, label, type, onChange, disabled, station, value} = props;

  return (
      <>
        {
          type === 'option' ? (
              <Form.Item name={label} label={label}>

                <Select onChange={onChange} defaultValue={value} allowClear >
                  {
                   data.map((item) => (
                        <Option value={item}>{item}</Option>
                    ))
                  }

                </Select>
              </Form.Item>
          ) : (
              <Form.Item name={label} label={label} >
                {
                  station === 'server' ? (
                      <Input  defaultValue={data} onChange={(e) => setData(e.target.value)}/>

                  ) : (
                      <Input disabled={disabled} defaultValue={data} onChange={(e) => setData(e.target.value)}/>
                  )
                }

              </Form.Item>
          )
        }
      </>
  );
};

export default InputField;