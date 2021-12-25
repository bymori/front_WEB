/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-23 21:18:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-24 22:12:01
 */
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import { getSongDetailAction } from '@/pages/player/store';

import { TopRankingWrapper } from './style';

export default memo(function IOTopRanking(props) {
  // props and state
  const { info } = props;
  const { tracks = [] } = info;

  // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image" title={info.name}>
          <img src={getSizeImage(info.coverImgUrl, 100)} alt={info.name} />
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item" title={item.name}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button
                    className="btn sprite_02 play"
                    title="播放"
                    onClick={(e) => playMusic(item)}></button>
                  <button
                    className="btn sprite_icon2 addTo"
                    title="添加到播放列表"></button>
                  <button className="btn sprite_02 favor" title="收藏"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
});