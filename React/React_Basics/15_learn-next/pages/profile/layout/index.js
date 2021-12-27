/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-27 16:06:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-27 16:06:13
 */
import React, { memo } from 'react';
import Link from 'next/link';

export default memo(function ProfileLayout(props) {
  return (
    <div>
      <h2>Profile</h2>
      <Link href="/profile/info">
        <a> 信息</a>
      </Link>
      <Link href="/profile/settings">
        <a> 设置</a>
      </Link>
      {props.children}
    </div>
  );
});
