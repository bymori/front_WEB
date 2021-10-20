/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-20 15:17:58
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-20 15:17:58
 */
import axios from './axios'

export const getMenu = () => {
  return axios.request({
    url: 'menu',
    method: 'get'
  })
}

export const getHome = () => {
  return axios.request({
    url: '/home/getData',
    method: 'get'
  })
}
