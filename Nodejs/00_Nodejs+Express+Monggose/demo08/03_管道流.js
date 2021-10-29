/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 20:52:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 20:55:28
 */

// 管道流

const fs = require('fs');
var readStream = fs.createReadStream('./aaa.png');

var writeStream = fs.createWriteStream('./data/aaa.png');

readStream.pipe(writeStream);
