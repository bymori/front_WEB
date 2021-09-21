/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-21 23:54:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-22 00:47:31
 */
var fs = require('fs');

/* 
  fs.existsSync(path)
    检查一个文件是否存在
*/

var isExists = fs.existsSync('./Resources/a.mp3'); //true
// isExists = fs.existsSync('./Resources/a123.mp3');//false
// console.log(isExists);

/* 
  fs.stat(path,callback)
  fs.statSync(path)
    获取文件状态
    它会给我们返回一个对象，这个对象中保存了当前对象状态的相关信息
*/
fs.stat('./Resources/a.mp3', function (err, stat) {
  console.log(err, stat);
  /* 
    isFile() 是否是一个文件
    isDirectory() 是否是一个文件夹(目录)
   */
  console.log('是否是一个文件', stat.isFile());
  console.log('是否是一个文件夹', stat.isDirectory());
  console.log('文件大小：' + (stat.size / 1024 / 1024).toFixed(2) + 'MB');
});

/* 
  fs.unlink(path,callback);
  fs.unlinkSync(path);
    删除文件
*/

// fs.unlinkSync('./Resources/b.mp3');

/* 
  fs.readdir(path[, options], callback)
  fs.readdirSync(path[, options])
    读取目录的内容
    files是一个字符串数组，每一个元素就是一个文件夹或文件的名字
*/
fs.readdir('.', function (err, files) {
  if (!err) {
    console.log(files);
  }
});

/* 
  fs.truncate(path[, len], callback)
  fs.fsyncSync(fd)
    截断文件
*/
fs.truncateSync('')

