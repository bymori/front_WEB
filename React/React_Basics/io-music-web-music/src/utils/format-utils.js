/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-22 22:25:44
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-22 22:28:50
 */

export function getCount(count) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 100) / 100 + '万';
  } else {
    return Math.floor(count / 1000000) / 100 + '亿';
  }
}

export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}
