/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 20:31:46
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 20:49:58
 */
const devBaseURL = 'https://lianghj.top:8888/api/private/v1/'
const proBaseURL = 'https://api.ioinn.cn'
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000
