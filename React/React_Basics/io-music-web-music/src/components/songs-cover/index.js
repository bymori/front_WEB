/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 22:01:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-23 19:10:03
 */
import React, { memo } from 'react';

import { getCount, getSizeImage } from '@/utils/format-utils';

import { SongsCoverWrapper } from './style';

export default memo(function IOSongsCover(props) {
  const { info } = props;

  return (
    <SongsCoverWrapper title={info.name}>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt={info.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-M-nowrap">{info.name}</div>
      {/* todo 上面div换成a标签 */}
      {/* <div className="cover-source text-nowrap"> */}
      {/* by {info.copywriter || info.creator.nickname} */}
      {/* </div> */}
    </SongsCoverWrapper>
  );
});
