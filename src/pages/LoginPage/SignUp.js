import React from 'react'
import styles from "./loginPage.module.scss";
import { Button, Form, Input } from 'antd';
import { Select } from 'antd';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { setSignUpAction } from '../../redux/action/userAction';

const { Option } = Select;

export default function SignUp() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    let data = {
      "taiKhoan": values.username1,
      "matKhau": values.password,
      "hoTen": values.fullname,
      "soDT": values.phonenumber,
      "maNhom": values.groupCode,
      "email": values.email,
    }
    const handleSuccess = () => {
      message.success("Đăng ký thành công!");
      setTimeout(() => {
        window.location.reload()
      }, 1000)
      
      
    }
    const handleError = (value) => {
      message.error(value);
    }
    dispatch(setSignUpAction(data,handleSuccess, handleError));
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
  <div className={styles.containerSignUp}>
    <h2 className="pt-3">ĐĂNG KÝ</h2>
    <Form
    className={styles.formSignUp}
    name="basic1"
    labelCol={{
      span: 0,
    }}
    wrapperCol={{
      span: 24,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    {/* account */}
    <Form.Item
      className={styles.formItem}
      name="username1"
      rules={[
        {
          required: true,
          message: 'Tài khoản không được để trống!',
        },
        {
          pattern: /^[a-zA-Z0-9]{3,}$/,
          message: "Tài khoản ít nhất 3 ký tự!",
        },
      ]}
    >
      <Input placeholder='Tài khoản' className={styles.typeInput}/>
    </Form.Item>

    {/* username */}
    <Form.Item
      className={styles.formItem}
      name="fullname"
      rules={[
        {
          required: true,
          message: 'Tên không được để trống!',
        },
        {
          pattern: /^[a-zA-Z\s]{3,}$/,
          message: "Tên phải là chữ và ít nhất 3 ký tự!",
        },
      ]}
    >
      <Input placeholder='Họ tên' className={styles.typeInput}/>
    </Form.Item>

    {/* passs */}
    <Form.Item
      className={styles.formItem}
      name="password"
      rules={[
        {
          required: true,
          message: 'Mật khẩu không được để trống',
        },
        {
          pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_#?!@$%^&*()-]).{8,}$/,
          message: "Mật khẩu ít nhất 8 ký tự, ít nhất 1 kí tự, 1 chữ và 1 số!",
        },
      ]}
    >
      <Input.Password placeholder='Mật khẩu' className={styles.typeInput}/>
    </Form.Item>

    {/* email */}
    <Form.Item
      className={styles.formItem}
      name="email"
      rules={[
        {
          required: true,
          message: 'Email không được để trống!',
        },
        {
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Email không hợp lệ!",
        },
      ]}
    >
      <Input placeholder='Email' className={styles.typeInput}/>
    </Form.Item>

    {/* phonenumber */}
    <Form.Item
      className={styles.formItem}
      name="phonenumber"
      rules={[
        {
          required: true,
          message: 'Số điện thoại không được để trống!',
        },
        {
          pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          message: "Số điện thoại không hợp lệ!",
        },
      ]}
    >
      <Input placeholder='Số điện thoại' className={styles.typeInput}/>
    </Form.Item>
    
    {/* group code */}
    <Form.Item
      className={styles.formItem}
      name="groupCode"
      initialValue="GP01"
      rules={[
        {
          required: true,
          message: 'Không được để trống!',
        },
        
      ]}
      >
      <Select
        className={styles.typeSelect}
        allowClear
      >
        <Option value="GP01">GP01</Option>
        <Option value="GP02">GP02</Option>
        <Option value="GP03">GP03</Option>
        <Option value="GP04">GP04</Option>
        <Option value="GP05">GP05</Option>
        <Option value="GP06">GP06</Option>
        <Option value="GP07">GP07</Option>
        <Option value="GP08">GP08</Option>
        <Option value="GP09">GP09</Option>
        <Option value="GP0  10">GP0 10</Option>
      </Select>
    </Form.Item>
    
    {/* btn */}
    <Form.Item
      className={styles.formBtn}
      wrapperCol={{
        offset: 0,
        span: 24,
      }}
    >
      <Button type="primary" className={styles.btnSignUp} htmlType="submit">
        Đăng ký
      </Button>
    </Form.Item>
  </Form>
  </div>
  )
}
