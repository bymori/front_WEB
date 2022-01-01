/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-31 14:16:17
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-01 19:11:30
 */
import React, { memo, useState, useEffect, useRef } from 'react';

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

import {
  loginQrKey,
  loginQrCreate,
  checkStatus,
  getLoginStatus,
} from '@/services/user';
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
  const qrcodeRef = useRef();

  async function getLoginStatu() {
    const res = await getLoginStatus();
    console.log(res.data);
  }

  const loginQRCode = useEffect(() => {
    // 使用 useEffect 处理 异步问题
    if (loginType !== 'qrcode') return;

    let timer;
    let timestamp = Date.now();

    getLoginStatu();

    async function login() {
      // todo redux存储用户信息 重新编写逻辑
      // todo 判断时间戳是否小于失效时间 或 查询二维码状态 不用每次切换tab栏就发送一次
      // todo 根据二维码状态 使用 canvas 在二维码之上画上遮挡物 参照哔哩哔哩
      // todo 未返回二维码数据时img加上加载动画

      const res = await loginQrKey(timestamp);
      const key = res.data.unikey; // 获取到的key

      const res2 = await loginQrCreate(key, timestamp); // base64 信息
      qrcodeRef.current.src = res2.data.qrimg; // qrimg通过 qrcodeRef 设置到src
      // qrimg 有效时间为 300 秒

      // 每三秒查询一次二维码状态
      timer = setInterval(async () => {
        const statusRes = await checkStatus(key);
        // 800 为二维码过期
        // 801 为等待扫码
        // 802 为待确认
        // 803 为授权登录成功(803 状态码下会返回 cookies)
        if (statusRes.code === 800) {
          alert('二维码已过期,请重新获取');
          clearInterval(timer);
        }
        if (statusRes.code === 803) {
          // 这一步会返回cookie
          clearInterval(timer);
          alert('授权登录成功');
          getLoginStatu();
        }
      }, 3000);
    }

    login();
  }, [loginType]);

  return (
    <LoginWrapper style={{ backgroundColor: 'white' }}>
      <LoginForm
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="沫沫-音乐"
        subTitle="推荐 网易云音乐APP 扫码登录"
        // onFinish={a}
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
          centered
          onChange={(activeKey) => setLoginType(activeKey)}
          onTabClick={loginQRCode}>
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
              <img ref={qrcodeRef} alt="" />
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
