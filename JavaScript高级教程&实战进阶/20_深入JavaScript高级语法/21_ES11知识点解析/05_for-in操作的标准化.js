/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-12 17:10:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-12 17:10:51
 */
// for...in 标准化: ECMA
const obj = {
  name: 'ioinn',
  age: 18,
};

for (const item in obj) {
  console.log(item);
}
