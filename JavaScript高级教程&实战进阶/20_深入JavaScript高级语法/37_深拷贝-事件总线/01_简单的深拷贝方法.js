/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-13 00:06:28
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-13 11:20:11
 */

const s1 = Symbol();
const s2 = Symbol();

const obj = {
  name: 'momo',
  friend: {
    name: 'mori',
  },
  foo: function () {
    console.log('foo function');
  },
  [s1]: 'abc',
  s2: s2,
};

const info = JSON.parse(JSON.stringify(obj));
console.log(info === obj);
obj.friend.name = 'ioinn';
console.log(info);
console.log(obj);
