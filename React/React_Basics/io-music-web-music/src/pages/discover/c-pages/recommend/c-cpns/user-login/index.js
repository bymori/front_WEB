/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 16:34:36
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-01 23:17:50
 */
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import localStorage from 'localStorage';
import { UserLoginWrapper, UserInfoWrapper } from './style';

export default memo(function IOUserLogin() {
  const userDetail = JSON.parse(localStorage.getItem('userDetail'));

  // if (userInfo) {
  //   console.log('userInfo ', 1);
  // } else {
  //   console.log('userInfo ', 2);
  // }

  // console.log(userInfo.profile.nickname);

  return (
    <div>
      {userDetail ? (
        <UserInfoWrapper>
          <div className="n-myinfo s-bg-5 sprite_02">
            <div className="f-cb">
              <NavLink to="#todo" className={'head'}>
                <img
                  src={userDetail.profile.avatarUrl}
                  alt=""
                  title={userDetail.profile.nickname}
                />
                <img
                  src={userDetail.identify.imageUrl}
                  alt={userDetail.identify.imageDesc}
                  title={userDetail.identify.imageDesc}
                  className="person-icn"
                />
              </NavLink>
              <div className="info">
                <h4>
                  <NavLink to="#todo">{userDetail.profile.nickname}</NavLink>
                  <span>vip图标</span>
                  {/* todo 添加vip图标 全局样式 通过className判断 userInfo.profile.vipType */}
                </h4>
                <p>
                  <NavLink to="#todo">
                    Lv:
                    {userDetail.level}
                  </NavLink>
                </p>
                <div>
                  <button>签到</button>
                </div>
              </div>
            </div>
            <ul className="dny f-cb">
              <li className="fst">
                <NavLink to="#todo">
                  <strong>{userDetail.profile.eventCount}</strong>
                  <span>动态</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#todo">
                  <strong>{userDetail.profile.follows}</strong>
                  <span>关注</span>
                </NavLink>
              </li>
              <li className="lst">
                <NavLink to="#todo">
                  <strong>{userDetail.profile.followeds}</strong>
                  <span>粉丝</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </UserInfoWrapper>
      ) : (
        <UserLoginWrapper className="sprite_02">
          <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <NavLink to="/mine/login" className="sprite_02">
            用户登录
          </NavLink>
        </UserLoginWrapper>
      )}
    </div>
  );
});
