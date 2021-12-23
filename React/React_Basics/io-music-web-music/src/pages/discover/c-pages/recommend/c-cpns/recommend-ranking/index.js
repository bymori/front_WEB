/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 19:45:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-23 16:18:09
 */
import React, { memo } from 'react';

import IOThemeHeaderRCM from '@/components/theme-header-rcm';
import { RankingWrapper } from './style';

export default memo(function IORecommendRanking() {
  return (
    <RankingWrapper>
      <IOThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  );
});
