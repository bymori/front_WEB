/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 16:09:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 16:31:25
 */
import request from './request';

// 所有榜单
export function getTopList() {
  return request({
    url: '/toplist',
  });
}

// 获取榜单详情
export function getRankingList(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id,
    },
  });
}
