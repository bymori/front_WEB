/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-31 14:16:17
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-31 21:50:48
 */
import React, { memo, useRef } from 'react';

import { getLogin, getLoginCode } from '@/services/user';

import { Form, Input, Button, Checkbox, Select, Row, Col } from 'antd';

export default memo(function IOLogin() {
  const { Option } = Select;

  const phoneRef = useRef();

  const onFinish = (values) => {
    console.log('Success:', values);
    // getLogin(values.phone, values.captcha).then((res) => {
    getLoginCode(values.phone, values.captcha).then((res) => {
      console.log(res);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    console.log(phoneRef.current.state.value);
    getLoginCode(phoneRef.current.state.value).then(
      (res) => {
        console.log(res);
      },
      (s) => {
        console.log(s);
      }
    );
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
        prefix: '86',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}>
        <Input
          ref={phoneRef}
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        label="Captcha"
        extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>

        <Button htmlType="button" onClick={onReset}>
          发送验证码
        </Button>
      </Form.Item>
    </Form>
  );
});
