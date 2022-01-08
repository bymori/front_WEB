/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-08 22:36:23
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-08 23:03:21
 */
// module.exports = {
//   name: 'momo',
//   age: 18,
//   foo: function () {
//     console.log('foo函数执行');
//   },
// };

const info = {
  name: 'momo',
  age: 18,
  foo: function () {
    console.log('foo函数执行');
  },
};

// setTimeout(() => {
//   info.name = 'mori';
// }, 1000);

setTimeout(() => {
  console.log(info.name);
}, 2000);

module.exports = info;
