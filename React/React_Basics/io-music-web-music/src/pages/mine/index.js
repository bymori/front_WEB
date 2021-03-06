/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 23:18:47
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-07 20:07:43
 */
import React, { memo, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { getLikeList, getSongDetail } from '@/services/user';

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

  useEffect(() => {
    async function login() {
      const likelist = await getLikeList(userDetail.userPoint.userId);
      // console.log(likelist.ids.toString()); // 获取到的结果 使用 toString() 方法 转换 传递给 getSongDetail 获取歌曲列表即可

      const SongDetail = await getSongDetail(likelist.ids.toString());
      console.log(SongDetail);
    }

    login();
  });

  console.log(userDetail.userPoint.userId);
  return (
    <MineWrapper>
      <div className="content wrap-v2">
        {userDetail ? (
          <div className="userDetail">
            <h1 className="userHeader">
              <img
                className="avatar"
                src={userDetail.profile.avatarUrl}
                alt=""
              />
              {userDetail.profile.nickname}的音乐库
            </h1>

            <div className="section-one">
              <div className="liked-songs">
                <div className="top">
                  <span>span</span>
                  <span>span</span>
                  <span>span</span>
                </div>
                <div className="bottom">
                  <div className="titles">
                    <div className="title">我喜欢的音乐</div>
                    <div className="sub-title">0 首歌</div>
                  </div>
                  <button>播放</button>
                </div>
              </div>
              <div className="songs">
                <div className="track-list">
                  <div className="list">
                    <img src={userDetail.profile.avatarUrl} alt="" />
                    <div className="title-and-artist">
                      <div className="container">
                        <div className="title">吃突发</div>
                        <div className="artist">吃土蕃 吃突发</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-tow">section-tow</div>
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
