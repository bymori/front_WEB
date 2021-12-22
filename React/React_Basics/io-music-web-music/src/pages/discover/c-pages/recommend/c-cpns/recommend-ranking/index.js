/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 19:45:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-22 19:49:54
 */
import React, { memo } from 'react';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { RankingWrapper } from './style';

export default memo(function IORecommendRanking() {
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  );
});
