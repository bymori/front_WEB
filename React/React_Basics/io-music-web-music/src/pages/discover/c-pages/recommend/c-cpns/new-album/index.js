/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 19:45:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-22 19:48:57
 */
import React, { memo } from 'react';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { AlbumWrapper } from './style';

export default memo(function IONewAlbum() {
  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
    </AlbumWrapper>
  );
});
