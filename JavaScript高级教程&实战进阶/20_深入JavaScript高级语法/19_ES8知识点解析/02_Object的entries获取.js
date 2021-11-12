/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 13:41:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 13:41:23
 */
const obj = {
  name: 'momo',
  age: 18,
};

console.log(Object.entries(obj));
const objEntries = Object.entries(obj);
objEntries.forEach((item) => {
  console.log(item[0], item[1]);
});

console.log(Object.entries(['abc', 'cba', 'nba']));
console.log(Object.entries('abc'));
