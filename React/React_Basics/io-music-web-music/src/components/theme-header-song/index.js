/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 20:58:19
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 21:03:42
 */
import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { HeaderWrapper } from './style';

export default memo(function IOThemeHeaderSong() {
  // redux
  const state = useSelector(
    (state) => ({
      playList: state.getIn(['ranking', 'playList']),
    }),
    shallowEqual
  );

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{state.playList.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <strong className="count">{state.playList.playCount}</strong>
        <span>次</span>
      </div>
    </HeaderWrapper>
  );
});
