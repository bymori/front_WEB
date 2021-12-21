/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 23:18:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-21 12:26:40
 */
import React, { memo } from 'react';

import { discoverMenu } from '@/common/local-data';

import { NavLink, Outlet } from 'react-router-dom';

import { DiscoverWrapper, TopMenu } from './style';

export default memo(function IODiscover() {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map(({ title, link }, index) => {
            return (
              <div className="item" key={title}>
                <NavLink to={link}>{title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      <Outlet />
    </DiscoverWrapper>
  );
});
