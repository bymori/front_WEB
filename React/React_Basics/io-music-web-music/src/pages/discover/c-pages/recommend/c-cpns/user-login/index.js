/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 16:34:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-31 14:20:09
 */
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { UserLoginWrapper } from './style';

export default memo(function IOUserLogin() {
  return (
    <UserLoginWrapper className="sprite_02">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <NavLink to="/mine/login" className="sprite_02">
        用户登录
      </NavLink>
    </UserLoginWrapper>
  );
});
