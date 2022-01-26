/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 20:30:07
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 21:06:02
 */
import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(
  (config) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

    // 3.params/data序列化的操作
    // console.log('请求被拦截')

    return config
  },
  (err) => {
    console.log(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    const { data, meta } = res.data
    if (meta.status === 200 || meta.status === 201) {
      return data
    } else {
      ElMessage.error(meta.msg)
      return Promise.reject(new Error(meta.msg))
    }
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误')
          break
        case 401:
          console.log('未授权访问')
          break
        default:
          console.log('其他错误信息')
      }
    }
    return err
  }
)

export default instance
