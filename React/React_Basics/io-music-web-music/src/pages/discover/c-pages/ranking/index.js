/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 14:51:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 16:52:58
 */
import React, { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import { getTops } from './store/actionCreators';

import IOTopRanking from './c-cpns/top-ranking';
import IORankingHeader from './c-cpns/ranking-header';

import { RankingWrapper, RankingLeft, RankingRight } from './style';

export default memo(function IORanking() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch]);

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <IOTopRanking />
      </RankingLeft>
      <RankingRight>
        <IORankingHeader />
      </RankingRight>
    </RankingWrapper>
  );
});
