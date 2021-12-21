/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-05 16:37:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-05 16:39:07
 */
const devBaseURL = 'https://api.ioinn.cn';
const proBaseURL = 'https://api.ioinn.cn';
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
