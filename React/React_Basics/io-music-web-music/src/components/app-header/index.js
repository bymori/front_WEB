/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 22:59:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-20 20:26:04
 */
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { headerLinks } from '@/common/local-data';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';

export default memo(function IOAppHeader() {
  // 页面代码
  // const showSelectItem = (item, index) => {
  const showSelectItem = ({ title, link }, index) => {
    if (index < 3) {
      return (
        <NavLink to={link}>
          {title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={link}>{title}</a>;
    }
  };

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
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
          {/* <NavLink to="/">发现音乐</NavLink>
          <NavLink to="mine/">我的音乐</NavLink>
          <NavLink to="/friend">我的朋友</NavLink> */}
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
