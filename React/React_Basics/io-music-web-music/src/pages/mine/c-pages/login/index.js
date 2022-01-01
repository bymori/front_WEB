/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-31 14:16:17
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-01 11:39:57
 */
import React, { memo, useState } from 'react';

import {
  LoginForm,
  ProFormText,
  ProFormCaptcha,
  ProFormCheckbox,
} from '@ant-design/pro-form';
import {
  UserOutlined,
  MobileOutlined,
  LockOutlined,
  WechatFilled,
  QqCircleFilled,
  WeiboCircleFilled,
} from '@ant-design/icons';

import { LoginWrapper } from './style';

import { message, Tabs, Space } from 'antd';

const iconStyles = {
  marginLeft: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

export default memo(function IOLogin() {
  const [loginType, setLoginType] = useState('phone');

  return (
    <LoginWrapper style={{ backgroundColor: 'white' }}>
      <LoginForm
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="沫沫-音乐"
        subTitle="推荐 网易云音乐APP 扫码登录"
        actions={
          <Space>
            其他登录方式
            <WechatFilled style={iconStyles} />
            <QqCircleFilled style={iconStyles} />
            <WeiboCircleFilled style={iconStyles} />
          </Space>
        }>
        <Tabs
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey)}>
          <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
          <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
          <Tabs.TabPane key={'qrcode'} tab={'扫码登录'} />
        </Tabs>
        {loginType === 'account' && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名: admin or user'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码: ant.design'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </>
        )}
        {loginType === 'phone' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={'prefixIcon'} />,
              }}
              name="mobile"
              placeholder={'手机号'}
              rules={[
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={'请输入验证码'}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`;
                }
                return '获取验证码';
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
              onGetCaptcha={async () => {
                message.success('获取验证码成功！验证码为：1234');
              }}
            />
          </>
        )}
        {loginType === 'qrcode' && (
          <>
            <div class="qrcode">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                alt=""
              />
            </div>
          </>
        )}
        <div
          style={{
            margin: '16px 0 24px',
            // marginBottom: 24,
          }}>
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            href="#todo"
            style={{
              float: 'right',
            }}>
            忘记密码
          </a>
        </div>
      </LoginForm>
    </LoginWrapper>
  );
});
