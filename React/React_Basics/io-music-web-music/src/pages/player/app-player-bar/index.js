/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-24 13:32:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-24 14:25:35
 */
import React, { memo } from 'react';

import { Slider } from 'antd';
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';

export default memo(function IOAppPlayerBar() {
  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content  wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/">
              <img
                src="https://p2.music.126.net/yZN047VYz7selK4LCsi1Zg==/109951164681443868.jpg?param=34y34"
                alt=""
              />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">借(Live)</span>
              <a href="/" className="singer-name">
                毛不易
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} />
              <div className="time">
                <span className="now-time">00:02</span>
                <span className="divider">/</span>
                <span className="duration">04:35</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlayerBarWrapper>
  );
});
