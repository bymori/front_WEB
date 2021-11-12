/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 14:22:33
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 14:25:53
 */
const obj = {
  name: 'momo',
  age: 18,
  height: 1.88,
};

const entries = Object.entries(obj);
console.log(entries);

// const newObj = {};
// for (const entry of entries) {
//   newObj[entry[0]] = entry[1];
// }
// console.log(newObj);

// 1.ES10中新增了Object.fromEntries方法
// const newObj = Object.fromEntries(entries);
// console.log(newObj);

// 2.Object.fromEntries的应用场景
const queryString = 'name=momo&age=18&height=1.88';
const queryParams = new URLSearchParams(queryString);
for (const param of queryParams) {
  console.log(param);
}

const paramObj = Object.fromEntries(queryParams);
console.log(paramObj);
