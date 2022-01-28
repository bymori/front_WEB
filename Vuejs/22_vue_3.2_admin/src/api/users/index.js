/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 22:28:27
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-28 21:50:14
 */
import request from '@/api/request'

export const getUsers = (params) => {
  return request({
    url: '/users',
    params
  })
}

export const changeUserState = (uid, type) => {
  return request({
    url: `users/${uid}/state/${type}`,
    method: 'PUT'
  })
}

// 坑 参数名字需为 data  填写params出现错误
export const addUser = (data) => {
  return request({
    url: '/users',
    method: 'POST',
    data
  })
}

export const editUser = (data) => {
  return request({
    url: `users/${data.id}`,
    method: 'PUT',
    data
  })
}
