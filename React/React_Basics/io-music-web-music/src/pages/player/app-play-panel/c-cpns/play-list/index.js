/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-30 08:44:14
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-30 22:41:26
 */
import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { getSongDetailAction } from '@/pages/player/store';

import { formatMinuteSecond } from '@/utils/format-utils';

import { PlayListWrapper } from './style';

import { List } from 'antd';
import VirtualList from 'rc-virtual-list';

export default memo(function IOPlayList() {
  const { playList, currentSongIndex } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex']),
    }),
    shallowEqual
  );

  // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  };

  const ContainerHeight = 400;

  return (
    <PlayListWrapper>
      {/* {playList.map((item, index) => {
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
      })} */}

      <List split={false}>
        <VirtualList
          data={playList}
          height={ContainerHeight}
          itemHeight={47}
          // onScroll={onScroll}
        >
          {(item, index) => (
            <List.Item
              // todo√ 点击播放当前歌曲
              key={item.id}
              className={classNames('play-item', {
                active: currentSongIndex === index,
              })}
              onClick={(e) => playMusic(item.id)}>
              <div className="left text-nowrap">{item.name}</div>
              <div className="operate">
                <button
                  className="btn sprite_playlist like"
                  title="收藏"></button>
                <button
                  className="btn sprite_playlist share"
                  title="分享"></button>
                <button
                  className="btn sprite_playlist download"
                  title="下载"></button>
                <button
                  className="btn sprite_playlist delete"
                  title="删除"></button>
              </div>
              <div className="right">
                <span className="singer text-nowrap" title={item.ar[0].name}>
                  {/* {item.ar[0].name} */}
                  {item.ar.map((iten) => {
                    return <span>{iten.name} </span>;
                  })}
                </span>
                <span className="duration">{formatMinuteSecond(item.dt)}</span>
                <span className="sprite_playlist link"></span>
              </div>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </PlayListWrapper>
  );
});
