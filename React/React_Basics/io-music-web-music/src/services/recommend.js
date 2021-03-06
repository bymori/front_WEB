/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 20:07:39
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-23 19:09:15
 */
import request from './request';

export function getTopBanners() {
  return request({
    url: '/banner',
  });
}

export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  });
}

export function getNewAlbums() {
  return request({
    url: '/album/newest',
  });
}

export function getTopList(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id,
    },
  });
}
