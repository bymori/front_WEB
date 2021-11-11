/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-11 19:56:58
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-11 20:15:55
 */
const names = ['abc', 'cba', 'nba'];

// 不可以使用const
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// {
//   let i = 0;
//   console.log(names[i]);
// }

// {
//   let i = 1;
//   console.log(names[i]);
// }

// {
//   let i = 2;
//   console.log(names[i]);
// }

// for...of: ES6新增的遍历数组(对象)
for (const item of names) {
  console.log(item);
}

// {
//   const item = 'abc';
//   console.log(item);
// }

// {
//   const item = 'cba';
//   console.log(item);
// }

// console.log(item);
