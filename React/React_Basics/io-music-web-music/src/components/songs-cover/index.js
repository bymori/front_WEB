/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 22:01:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-29 23:41:38
 */
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopListActions } from '../../pages/discover/c-pages/recommend/store/actionCreators';
import {
  getSongDetailAction,
  getSongDetailActions,
} from '@/pages/player/store';

import { getCount, getSizeImage } from '@/utils/format-utils';

import { SongsCoverWrapper } from './style';

export default memo(function IOSongsCover(props) {
  const { info } = props;

  // redux hook
  const { hotRecommendsList } = useSelector(
    (state) => ({
      hotRecommendsList: state.getIn(['recommend', 'hotRecommendsList']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const playMusic = useCallback(
    (id) => {
      console.log(id);
      dispatch(getTopListActions(id));

      console.log(hotRecommendsList[0].name);
      dispatch(getSongDetailAction(hotRecommendsList[0].id));
    },
    [dispatch, hotRecommendsList]
  );

  const playMusics = useCallback(
    (id) => {
      dispatch(getSongDetailActions(id));
    },
    [dispatch]
  );

  return (
    <SongsCoverWrapper title={info.name}>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt={info.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i
              className="sprite_icon play"
              title="播放"
              onClick={() => {
                playMusic(info.id);
              }}></i>
          </div>
        </div>
      </div>
      <div
        className="cover-bottom text-M-nowrap"
        onClick={() => {
          playMusics(info.id);
        }}>
        {info.name}
      </div>
      {/* todo 上面div换成a标签 */}
      {/* <div className="cover-source text-nowrap"> */}
      {/* by {info.copywriter || info.creator.nickname} */}
      {/* </div> */}
    </SongsCoverWrapper>
  );
});
