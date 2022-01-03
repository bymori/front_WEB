/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-31 14:56:29
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-02 22:19:57
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

// 获取用户歌单 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
// 通过 playlist[*].creator.userId 判断是否等于uid 如果是 就是创建的歌单 否则 收藏的歌单
export function getUserPlaylist(uid) {
  return request({
    url: `/user/playlist`,
    params: {
      uid,
    },
  });
}

// 喜欢音乐列表 传入用户 id, 可获取已喜欢音乐 id 列表(id 数组)
export function getLikeList(uid) {
  return request({
    url: `/likelist`,
    params: {
      uid,
    },
  });
}

// 获取歌曲详情
export function getSongDetail(ids) {
  return request({
    url: `/song/detail`,
    params: {
      ids,
    },
  });
}

//  todo
// 热门歌手 /top/artists 随机获取几个展示
// 歌单分类 /playlist/catlist categories分类 sub[0].category
// 精品歌单标签列表 /playlist/highquality/tags
// 获取精品歌单 /top/playlist/highquality
