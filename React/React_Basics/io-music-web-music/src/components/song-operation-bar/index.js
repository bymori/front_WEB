/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 19:28:44
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-30 23:10:06
 */

import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { getSongDetailActions } from '@/pages/player/store';

import { OperationBarWrapper } from './style';

export default memo(function IOSongOperationBar(props) {
  const { detailId, favorTitle, shareTitle, downloadTitle, commentTitle } =
    props;

  console.log(detailId);

  // redux hooks
  const dispatch = useDispatch();

  const playMusics = useCallback(
    (id) => {
      dispatch(getSongDetailActions(id));
    },
    [dispatch]
  );

  return (
    <OperationBarWrapper>
      <span
        className="play"
        onClick={() => {
          playMusics(detailId);
        }}
        title="播放">
        <span className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </span>
        <a
          href="/abc"
          className="add-icon sprite_button"
          title="添加到播放列表">
          +
          {/* todo 添加到播放列表函数 当前当前歌曲添加到列表 不进行播放 保留之前歌曲 需要进行去重操作 */}
        </a>
      </span>
      <a href="/abc" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  );
});
