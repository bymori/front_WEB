/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 18:39:21
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 19:37:16
 */
import React, { useEffect } from 'react';

const Home = (props) => {
  useLoggingLife('Home');
  return <h2>Home</h2>;
};

const Profile = (props) => {
  useLoggingLife('Profile');
  return <h2>Profile</h2>;
};

export default function CustomLifeHookDemo01() {
  useLoggingLife('CustomLifeHookDemo01');
  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
      <Home />
      <Profile />
    </div>
  );
}

function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建出来了`);

    return () => {
      console.log(`${name}组件被销毁掉了`);
    };
  }, []);
}
