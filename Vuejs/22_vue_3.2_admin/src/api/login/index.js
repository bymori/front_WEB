/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 20:36:21
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 20:37:29
 */
import request from '@/api/request'

export const login = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}
