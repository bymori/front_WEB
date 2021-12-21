/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 23:18:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-21 16:46:29
 */
import React, { memo, useEffect } from 'react';

import { discoverMenu } from '@/common/local-data';

import { NavLink, Outlet } from 'react-router-dom';

import { DiscoverWrapper, TopMenu } from './style';

import request from '@/services/request';

export default memo(function IODiscover() {
  useEffect(() => {
    request({
      url: '/banner',
    }).then((res) => {
      console.log(res);
    });
  }, []);

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
