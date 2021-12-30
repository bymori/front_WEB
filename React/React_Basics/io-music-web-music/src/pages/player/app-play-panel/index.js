/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-30 08:20:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-30 09:59:34
 */
import React, { memo } from 'react';

import IOPlayHeader from './c-cpns/play-header';
import IOPlayList from './c-cpns/play-list';
import IOLyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function IOAppPlayPanel() {
  return (
    <PanelWrapper>
      <IOPlayHeader />
      <div className="main">
        <img
          className="image"
          src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg"
          alt=""
        />
        <IOPlayList />
        <IOLyricPanel />
      </div>
    </PanelWrapper>
  );
});
