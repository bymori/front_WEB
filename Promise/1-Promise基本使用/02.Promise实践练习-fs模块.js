/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-25 14:07:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-25 14:14:26
 */
//引入 fs模块
const fs = require('fs');

//回调函数 形式
/* fs.readFile('./1-Promise基本使用/resource/content.txt', (err, data) => {
  // 如果出错 则抛出错误
  if (err) throw err;
  //输出文件内容
  console.log(data.toString());
}); */

//Promise 形式
let p = new Promise((resolve, reject) => {
  fs.readFile('./1-Promise基本使用/resource/content.txt', (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});

//调用then
p.then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log(reason);
  }
);
