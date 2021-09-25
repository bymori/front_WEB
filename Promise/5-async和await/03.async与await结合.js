/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-25 20:45:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-25 20:53:31
 */
/**
 * resource  1.html  2.html 3.html 文件内容
 */
const fs = require('fs');
const util = require('util');
const mineReadFile = util.promisify(fs.readFile);

//回调函数的方式
/* fs.readFile('./5-async和await/resource/1.html', (err, data1) => {
  if (err) throw err;
  fs.readFile('./5-async和await/resource/2.html', (err, data2) => {
    if (err) throw err;
    fs.readFile('./5-async和await/resource/3.html', (err, data3) => {
      if (err) throw err;
      console.log(data1 + data2 + data3);
    });
  });
}); */

//async 与 await

async function main() {
  try {
    //读取第一个文件的内容
    let data1 = await mineReadFile('./5-async和await/resource/1.html');
    let data2 = await mineReadFile('./5-async和await/resource/2.html');
    let data3 = await mineReadFile('./5-async和await/resource/3.html');
    console.log(data1 + data2 + data3);
  } catch (error) {
    console.log(error.errno);
  }
}

main();
