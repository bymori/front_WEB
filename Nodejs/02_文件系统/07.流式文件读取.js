/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-21 23:33:59
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-21 23:46:38
 */

/*
	流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
 */
var fs = require('fs');

var path = './Resources/an.jpg';
var pathmp3 = './Resources/a.mp3';
var backmp3 = './Resources/back.mp3';
//创建一个可读流
var rs = fs.createReadStream(pathmp3);

//创建一个可写流
var ws = fs.createWriteStream(backmp3);

//监听流的开启和关闭
rs.once('open', function () {
  console.log('可读流打开了~~');
});

rs.once('close', function () {
  console.log('可读流关闭了~~');

  //数据读取完毕，关闭可写流
  ws.end();
});

//可写流的开启和关闭
ws.once('open', function () {
  console.log('可写流打开了!!!');
});

ws.once('close', function () {
  console.log('可写流关闭了!!!');
});

rs.on('data', function (data) {
  //   console.log(data);
  //   console.log(data.length);

  //将读取到的数据写入到可写流中
  ws.write(data);
});
