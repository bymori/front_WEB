/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 20:47:22
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 20:48:51
 */

//  写入文件
const fs = require('fs');
var str = '';

for (var i = 0; i < 500; i++) {
  str += '我是从数据库获取的数据，我要保存起来' + i + '\n';
}

var writeStream = fs.createWriteStream('./data/output.txt');

writeStream.write(str);

//标记文件末尾
writeStream.end();

writeStream.on('finish', () => {
  console.log('写入完成');
});
