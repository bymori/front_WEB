/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 23:18:47
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-02 15:13:56
 */
import React, { memo } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import localStorage from 'localStorage';

import { MineWrapper } from './style';

export default memo(function IOMine() {
  let location = useLocation();
  const userDetail = JSON.parse(localStorage.getItem('userDetail'));

  // if (location.pathname === '/mine') {
  //   <div className="pic">
  //     <NavLink to="/mine/login" className="login">
  //       立即登录
  //     </NavLink>
  //   </div>;
  // } else {
  //   <Outlet />;
  // }

  console.log(userDetail);
  return (
    <MineWrapper>
      <div div className="content wrap-v2">
        {userDetail ? (
          <div className="userDetail">
            <img src={userDetail.profile.backgroundUrl} alt="" />
          </div>
        ) : (
          <>
            {location.pathname === '/mine' ? (
              <div className="pic">
                <NavLink to="/mine/login" className="login">
                  立即登录
                </NavLink>
              </div>
            ) : (
              <Outlet />
            )}
          </>
        )}
      </div>
    </MineWrapper>
  );
});
