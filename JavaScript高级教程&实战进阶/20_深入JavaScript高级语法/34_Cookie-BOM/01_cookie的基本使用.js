/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-11 20:53:21
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-11 23:03:02
 */

// 这个cookie会在会话关闭时被删除掉

document.cookie = 'name=momo';
document.cookie = 'age=18';

// 设置cookie，同时设置过期时间（默认单位是秒钟）
document.cookie = 'name=mori;max-age=1'; // 表示为 1秒钟后过期
// js直接设置和获取cookie
console.log(document.cookie);

setTimeout(() => {
  console.log(document.cookie);
}, 2000);
