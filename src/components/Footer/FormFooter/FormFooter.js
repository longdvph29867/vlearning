import React from 'react'
import { Form, Input } from 'antd';
import styles from './formFooter.module.scss'
import ButtonV1 from '../../ButtonV1/ButtonV1';
export default function FormFooter() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
  return (
    <Form
    className={styles.formSignIn}
    name="basic"
    labelCol={{
        span: 0,
    }}
    wrapperCol={{
        span: 24,
    }}
    style={{
        maxWidth: 600,
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
        name="fullName"
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
        <Input placeholder='Họ và tên' className={styles.typeInput}/>
    </Form.Item>

    <Form.Item
        className={styles.formItem}
        name="emailUser"
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

    <Form.Item
        wrapperCol={{
        offset: 0,
        span: 24,
        }}
    >
        <ButtonV1  type="primary" htmlType="submit">
        ĐĂNG KÍ
        </ButtonV1>
    </Form.Item>
    </Form>
  )
}
