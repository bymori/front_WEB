/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 14:51:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 16:02:47
 */
import React, { memo } from 'react';

import IOTopRanking from './c-cpns/top-ranking';

import { RankingWrapper, RankingLeft, RankingRight } from './style';

export default memo(function IORanking() {
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <IOTopRanking />
      </RankingLeft>
      <RankingRight>RankingRight</RankingRight>
    </RankingWrapper>
  );
});
