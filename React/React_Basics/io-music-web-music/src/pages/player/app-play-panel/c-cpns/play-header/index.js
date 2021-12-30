/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-30 08:28:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-30 08:40:11
 */
import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';

export default memo(function IOPlayHeader() {
  const { playList, currentSong } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList']),
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual
  );

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight> {currentSong.name}</HeaderRight>
    </HeaderWrapper>
  );
});
