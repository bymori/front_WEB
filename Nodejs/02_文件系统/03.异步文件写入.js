/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-21 22:14:43
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-21 23:22:05
 */

/*
	异步文件写入
 fs.open(path, flags[, mode], callback)
 	- 用来打开一个文件
    - 异步调用的方法，结果都是通过回调函数的参数返回的
 	- 回调函数两个参数：
 		err 错误对象，如果没有错误则为null
 		fd  文件的描述符
 fs.write(fd, string[, position[, encoding]], callback)
 	- 用来异步写入一个文件

 fs.close(fd, callback)
 	- 用来关闭文件
 */

//引入fs模块
var fs = require('fs');

//打开文件
fs.open('./writing/03.hello.txt', 'w', function (err, fd) {
  //判断是否出错
  if (!err) {
    //如果没有出错，则对文件进行写入操作
    fs.write(fd, '这是异步写入的内容', function (err) {
      if (!err) {
        console.log('异步写入成功！');
      }
      //关闭文件
      fs.close(fd, function (err) {
        if (!err) {
          console.log('文件已关闭~~~');
        }
      });
    });
  } else {
    console.log(err);
  }
});
console.log('程序向下执行~~~');