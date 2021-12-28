/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 16:03:52
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 19:15:16
 */
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { changeCurrentIndex, getRanking } from '../../store/actionCreators';

import { TopRankingWrapper } from './style';

export default memo(function IOTopRanking() {
  // redux
  const state = useSelector(
    (state) => ({
      topList: state.getIn(['ranking', 'topList']),
      currentIndex: state.getIn(['ranking', 'currentIndex']),
    }),
    shallowEqual
  );
  const currentIndex = state.currentIndex;
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    const id = state.topList[currentIndex] && state.topList[currentIndex].id;
    if (!id) return;
    dispatch(getRanking(id));
  }, [state, dispatch, currentIndex]);

  // handle function
  const handleItemClick = (index) => {
    dispatch(changeCurrentIndex(index));
    const id = state.topList[currentIndex].id;
    dispatch(getRanking(id));
  };

  return (
    <TopRankingWrapper>
      {state.topList.map((item, index) => {
        let header;
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? '云音乐特色榜' : '全球媒体榜'}
            </div>
          );
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className="item"
              title={item.description}
              onClick={(e) => handleItemClick(index)}>
              <img src={item.coverImgUrl} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </TopRankingWrapper>
  );
});
