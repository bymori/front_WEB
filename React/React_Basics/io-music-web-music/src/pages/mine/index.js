/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 23:18:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-31 14:33:17
 */
import React, { memo } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { MineWrapper } from './style';

export default memo(function IOMine() {
  let location = useLocation();

  // if (location.pathname === '/mine') {
  //   <div className="pic">
  //     <NavLink to="/mine/login" className="login">
  //       立即登录
  //     </NavLink>
  //   </div>;
  // } else {
  //   <Outlet />;
  // }

  return (
    <MineWrapper>
      <div className="content wrap-v2">
        {location.pathname === '/mine' ? (
          <div className="pic">
            <NavLink to="/mine/login" className="login">
              立即登录
            </NavLink>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </MineWrapper>
  );
});
