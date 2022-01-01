/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-31 14:56:29
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-01 22:38:28
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

//  二维码 key 生成接口
export function loginQrKey(timerstamp) {
  return request({
    url: '/login/qr/key',
    params: {
      timerstamp,
    },
    withCredentials: true, //关键
  });
}

// 二维码生成接口
export function loginQrCreate(key, timerstamp) {
  return request({
    url: `/login/qr/create?key=${key}&qrimg=true&timerstamp=${timerstamp}`,
    withCredentials: true, //关键
  });
}

//  二维码检测扫码状态接口
export function checkStatus(key) {
  return request({
    url: `/login/qr/check?key=${key}&timerstamp=${Date.now()}`,
    withCredentials: true, //关键
  });
}

//  获取登录状态
export function getLoginStatus() {
  return request({
    url: `/login/status?timerstamp=${Date.now()}`,
    withCredentials: true, //关键
  });
}

// 退出登录
export function getLogout() {
  return request({
    url: `/logout`,
  });
}

// 获取用户详情
export function getUserDetail(uid) {
  return request({
    url: `/user/detail`,
    params: {
      uid,
    },
  });
}
