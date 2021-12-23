/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-23 16:16:11
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-23 16:43:42
 */
import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils';

import { AlbumWrapper } from './style';

export default memo(function IOAlbumCover(props) {
  // state and props
  const { info, size = 130, width = 153, bgp = '-845px' } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp} title={info.name}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt={info.name} />
        <a href="/todo" className="cover image_cover">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
      {/* todo div改成a标签链接 鼠标悬浮上显示相应文字 artist  */}
      {/* todo artist.name 显示全部 用 / 分隔 */}
      {/* todo 点击 artist.name 跳转到 歌手页面  artist.id  获取歌手详情  获取歌手描述*/}
    </AlbumWrapper>
  );
});
