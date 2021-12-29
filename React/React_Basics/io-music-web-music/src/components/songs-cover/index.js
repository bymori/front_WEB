/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 22:01:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-29 23:03:47
 */
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSongDetailAction } from '@/pages/player/store';
import { getTopListActions } from '../../pages/discover/c-pages/recommend/store/actionCreators';
import { getTopList } from '@/services/recommend';

import { getCount, getSizeImage } from '@/utils/format-utils';

import { SongsCoverWrapper } from './style';

export default memo(function IOSongsCover(props) {
  const { info } = props;

  // redux hook
  const { playList, hotRecommendsList } = useSelector((state) => ({
    playList: state.getIn(['player', 'playList']),
    hotRecommendsList: state.getIn(['recommend', 'hotRecommendsList']),
  }));

  const dispatch = useDispatch();

  const playMusic = useCallback((id) => {
    console.log(id);
    dispatch(getTopListActions(id));

    // dispatch(getTopListActions(id));
    // getTopList(id).then((res) => {
    //   // console.log(res.playlist.trackIds);
    //   console.log(res.playlist.tracks);
    //   res.playlist.tracks.map((item) => {
    //     // setTimeout(dispatch(getSongDetailAction(item.id)), 0);

    //   });
    //   //
    // });
  }, []);

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
      <div className="cover-bottom text-M-nowrap">{info.name}</div>
      {/* todo 上面div换成a标签 */}
      {/* <div className="cover-source text-nowrap"> */}
      {/* by {info.copywriter || info.creator.nickname} */}
      {/* </div> */}
    </SongsCoverWrapper>
  );
});
