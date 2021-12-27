/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-27 16:04:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-27 16:08:48
 */
import React, { memo } from 'react';

import Layout from '../layout';
import { InfoWrapper } from './style';

export default memo(function ProfileInfo() {
  return (
    <Layout>
      <InfoWrapper>
        <h2>InfoWrapper</h2>
        <span>我的名字: InfoWrapper</span>
      </InfoWrapper>
    </Layout>
  );
});
