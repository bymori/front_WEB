/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 22:59:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-19 22:43:30
 */
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';

export default memo(function IOAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          {/* <a href="/" className="logo sprite_01">
            // 网易云音乐 使用 NavLink 解决 点击a标签时 在 / 页面跳转会刷新
          </a> */}
          <NavLink to="/" className="logo sprite_01">
            网易云音乐
          </NavLink>
          <NavLink to="/">发现音乐</NavLink>
          <NavLink to="mine/">我的音乐</NavLink>
          <NavLink to="/friend">我的朋友</NavLink>
        </HeaderLeft>
        <HeaderRight>HeaderRight</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
