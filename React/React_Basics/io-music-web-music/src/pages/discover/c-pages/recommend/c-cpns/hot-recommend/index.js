/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 16:33:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-22 21:08:12
 */
import React, { memo } from 'react';

import IOThemeHeaderRCM from '@/components/theme-header-rcm';

import { HotRecommendWrapper } from './style';

export default memo(function IOHotRecommend() {
  return (
    <HotRecommendWrapper>
      <IOThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
        moreLink="/discover/songs"
      />
    </HotRecommendWrapper>
  );
});
