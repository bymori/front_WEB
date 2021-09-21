/*
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-09-21 23:49:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-21 23:52:07
 */
/*
	流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
 */

var fs = require("fs");

var pathmp3 = './Resources/a.mp3';
var backmp3 = './Resources/08.mp3';
//创建一个可读流
var rs = fs.createReadStream(pathmp3);

//创建一个可写流
var ws = fs.createWriteStream(backmp3);

//pipe()可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws)