/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-30 08:44:14
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-30 10:25:56
 */
import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { formatMinuteSecond } from '@/utils/format-utils';

import { PlayListWrapper } from './style';

export default memo(function IOPlayList() {
  const { playList, currentSongIndex } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex']),
    }),
    shallowEqual
  );

  return (
    <PlayListWrapper>
      {playList.map((item, index) => {
        return (
          <div
            key={item.id}
            className={classNames('play-item', {
              active: currentSongIndex === index,
            })}>
            <div className="left">{item.name}</div>
            <div className="right">
              <span className="singer">{item.ar[0].name}</span>
              <span className="duration">{formatMinuteSecond(item.dt)}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        );
      })}
    </PlayListWrapper>
  );
});
