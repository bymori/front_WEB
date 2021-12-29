/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 19:51:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 22:28:52
 */
import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSongDetailAction } from '@/pages/player/store';

import { getSizeImage, formatMinuteSecond } from '@/utils/format-utils';

import IOThemeHeaderSong from '@/components/theme-header-song';

import { RankingListWrapper } from './style';

export default memo(function IORankingList() {
  const state = useSelector(
    (state) => ({
      playList: state.getIn(['ranking', 'playList']),
    }),
    shallowEqual
  );
  const tracks = state.playList.tracks || [];

  // redux hooks
  const dispatch = useDispatch();

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <RankingListWrapper>
      <IOThemeHeaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="rank-num">
                      <span className="num">{index + 1}</span>
                      <span className="new sprite_icon2"></span>
                    </div>
                  </td>
                  <td>
                    <div className="song-name">
                      {index < 3 ? (
                        <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                      ) : null}
                      <span
                        className={
                          ' sprite_table ' + (!index ? 'first' : 'play')
                        }
                        onClick={(e) => playMusic(item)}></span>
                      <span className="name text-nowrap" title={item.name}>
                        {item.name}
                        {/* {item.alia != false ? (
                          <span className="alia text-nowrap">-{item.alia}</span>
                        ) : (
                          ''
                        )} */}

                        {/* todo 待解决 bug 文字超长 会影响布局样式 */}
                      </span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item.dt)}</td>
                  {/* <td title={item.ar[0].name}>{item.ar[0].name}</td> */}
                  <td>
                    {item.ar.map((iten) => {
                      return <span>{iten.name} </span>;
                    })}
                  </td>
                  {/* todo√ 展示全部 ar.name */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  );
});
