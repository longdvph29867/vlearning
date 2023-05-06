import { message } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setSignInAction } from '../../redux/action/userAction';
import styles from "./loginPage.module.scss";
import { Button, Form, Input } from 'antd';

export default function SignIn() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log('Success:', values);
    let data = {
      "taiKhoan": values.username,
      "matKhau": values.password
    }
    const handleSuccess = () => {
      message.success("Đăng nhập thành công!");
      window.location.href = '/'
    }
    const handleError = (value) => {
      message.error(value);
    }
    dispatch(setSignInAction(data, handleSuccess, handleError));
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.containerSignIn}>
      <h1>Đăng nhập</h1>
      <span>Hoặc sử dụng tài khoản đã đăng ký của bạn</span>
      <Form
      className={styles.formSignIn}
      name="basic"
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
      <Form.Item
        className={styles.formItem}
        name="username"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tài khoản của bạn!',
          },
        ]}
      >
        <Input placeholder='Tài khoản' className={styles.typeInput}/>
      </Form.Item>

      <Form.Item
        className={styles.formItem}
        name="password"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mật khẩu của bạn!',
          },
        ]}
      >
        <Input.Password placeholder='Mật khẩu'className={`${styles.typeInput} ${styles.bgGlobal}`}/>
      </Form.Item>
      <a href="#">Quên mật khẩu?</a>
      <Form.Item
        className={styles.formBtn}
        wrapperCol={{
          offset: 0,
          span: 24,
        }}
      >
        <Button type="primary" className={styles.btnSignIn} htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}
