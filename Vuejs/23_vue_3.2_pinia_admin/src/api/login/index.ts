/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-29 20:13:11
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-29 20:13:11
 */
import request from '@/api/request';

export const login = (data = {}) => {
  return request({
    url: '/login',
    method: 'POST',
    data,
  });
};
