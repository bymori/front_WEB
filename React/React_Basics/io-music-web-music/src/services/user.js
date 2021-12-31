/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-31 14:56:29
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-31 21:54:24
 */
import request from './request';

export function getLogin(phone, password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password,
    },
  });
}

// 发送验证码
export function getLoginCode(phone) {
  return request({
    url: '/captcha/sent',
    params: {
      phone,
    },
  });
}
