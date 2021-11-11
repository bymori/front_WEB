/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 22:45:38
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 22:45:38
 */
const info = {
  name: 'momo',
  friend: { name: 'kobe' },
};

const obj = { ...info, name: 'ioinn' };
console.log(obj);
obj.friend.name = 'james';

console.log(info.friend.name);
