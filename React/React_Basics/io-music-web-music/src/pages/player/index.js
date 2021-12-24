/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-18 23:18:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-24 20:15:22
 */
import React, { memo } from 'react';

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style';

export default memo(function IOPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>PlayerInfo</h2>
          <h2>SongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>simiPlaylist 相似歌曲</h2>
          <h2>SimiSong</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
