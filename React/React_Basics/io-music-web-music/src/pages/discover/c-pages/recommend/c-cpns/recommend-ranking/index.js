/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 19:45:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-23 19:28:52
 */
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopListAction } from '../../store/actionCreators';
// import { getTopList } from '@/services/recommend';

import IOThemeHeaderRCM from '@/components/theme-header-rcm';
import { RankingWrapper } from './style';

export default memo(function IORecommendRanking() {
  // useEffect(() => {
  //   getTopList(19723756).then((res) => {
  //     console.log(res.playlist.tracks); // 飙升榜
  //   });
  //   getTopList(3779629).then((res) => {
  //     console.log(res.playlist.tracks); // 新歌榜
  //   });
  //   getTopList(2884035).then((res) => {
  //     console.log(res.playlist.tracks); // 原创榜
  //   });
  // }, []);

  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(19723756)); // 飙升榜
    dispatch(getTopListAction(3779629)); // 新歌榜
    dispatch(getTopListAction(2884035)); // 原创榜
  }, [dispatch]);

  return (
    <RankingWrapper>
      <IOThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  );
});
