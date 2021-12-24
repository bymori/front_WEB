/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-24 14:47:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-24 14:47:48
 */
import request from './request';

export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  });
}
