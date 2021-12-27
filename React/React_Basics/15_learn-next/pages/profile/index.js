/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-27 15:32:55
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-27 15:59:53
 */
import React, { memo } from 'react';

import { ProfileWrapper } from './style';

export default memo(function ProfileInfo() {
  return (
    <ProfileWrapper>
      <h2>ProfileInfo</h2>
      <span>我的名字: ProfileInfo</span>
    </ProfileWrapper>
  );
});
