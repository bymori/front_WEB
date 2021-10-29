/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 20:43:07
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 20:47:10
 */

//  从文件流中读取数据
const fs = require('fs');
var readStream = fs.createReadStream('./data/input.txt');

var count = 0;
var str = '';
readStream.on('data', (data) => {
  str += data;
  count++;
});

readStream.on('end', () => {
  console.log(str);
  console.log(count);
});

readStream.on('error', (err) => {
  console.log(err);
});
