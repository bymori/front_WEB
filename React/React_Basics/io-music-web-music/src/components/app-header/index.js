/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 22:59:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-18 23:05:32
 */
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

export default memo(function IOAppHeader() {
  return (
    <div>
      <h2>
        <NavLink to="/">发现音乐</NavLink>
        <NavLink to="mine/">我的音乐</NavLink>
        <NavLink to="/friend">我的朋友</NavLink>
      </h2>
    </div>
  );
});
