/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 16:53:33
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-30 22:59:44
 */
import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { formatMonthDay } from '@/utils/format-utils';

import IOSongOperationBar from '@/components/song-operation-bar';

import { RankingHeaderWrapper } from './style';

export default memo(function IORankingHeader() {
  // redux
  const state = useSelector(
    (state) => ({
      playList: state.getIn(['ranking', 'playList']),
      topList: state.getIn(['ranking', 'topList']),
      currentIndex: state.getIn(['ranking', 'currentIndex']),
    }),
    shallowEqual
  );
  const topInfo = state.playList;
  const topList = state.topList;
  const currentIndex = state.currentIndex;

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={topInfo && topInfo.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{topInfo.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
          <div className="update-f">
            （{topList[currentIndex] && topList[currentIndex].updateFrequency}）
            {/* 更新时间 todo playList playlist.updateTime 字符串 需要进行处理 */}
          </div>
        </div>
        <IOSongOperationBar
          detailId={topInfo.id}
          favorTitle={`(${topInfo.subscribedCount})`}
          shareTitle={`(${topInfo.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${topInfo.commentCount})`}
          //   todo 收藏状态 可用/不可用
        />
      </div>
    </RankingHeaderWrapper>
  );
});
