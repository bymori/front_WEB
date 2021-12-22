/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 16:33:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-22 21:53:30
 */
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { HOT_RECOMMEND_LIMIT } from '@/common/constants';
import { getHotRecommendAction } from '../../store/actionCreators';

import IOThemeHeaderRCM from '@/components/theme-header-rcm';

import { HotRecommendWrapper } from './style';

export default memo(function IOHotRecommend() {
  // state
  // redux hooks
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <IOThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
