/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 20:30:07
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 20:32:02
 */
import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

export default instance
