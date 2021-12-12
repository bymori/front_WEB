/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 20:37:43
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 20:49:44
 */
import React, { useEffect, useState } from 'react';

import useScrollPosition from '../hooks/scroll-position-hook';

export default function CustomScrollPositionHook() {
  const position = useScrollPosition();

  return (
    <div style={{ padding: '1000px 0' }}>
      <h2 style={{ position: 'fixed', left: 0, top: 0 }}>
        CustomScrollPositionHook-{position}
      </h2>
    </div>
  );
}
