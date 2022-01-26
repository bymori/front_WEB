/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 22:28:27
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 22:34:26
 */
import request from '@/api/request'

export const menuList = () => {
  return request({
    url: '/menus'
  })
}
