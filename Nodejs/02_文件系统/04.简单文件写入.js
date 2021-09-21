/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-21 22:32:17
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-21 22:56:21
 */
/*
	简单文件写入
	 fs.writeFile(file, data[, options], callback)
	 fs.writeFileSync(file, data[, options])
		- file 要操作的文件的路径
		- data 要写入的数据
		- options 选项，可以对写入进行一些设置
            文件系统标志  http://nodejs.cn/api/fs.html#fs_file_system_flags
		- callback 当写入完成以后执行的函数

		- flag
			r 只读
			w 可写
			a 追加
 */
//引入fs模块
var fs = require('fs');
/* fs.writeFile(
  './Nodejs/02_文件系统/04.hello.txt',
  '这是通过writeFile写入的内容',
  { flag: 'a' },
  function (err) {
    if (!err) {
      console.log('写入成功~~~');
    } else {
      console.log(err);
    }
  }
); */

// 可以使用绝对路径
// D:\Test_project\Demo_project\front_WEB\Nodejs\02_文件系统\04.hello1.txt
// D:/Test_project/Demo_project/front_WEB/Nodejs/02_文件系统/04.hello1.txt
fs.writeFile(
  'D:/Test_project/Demo_project/front_WEB/Nodejs/02_文件系统/04.hello1.txt',
  '这是通过writeFile写入的内容',
  { flag: 'a' },
  function (err) {
    if (!err) {
      console.log('写入成功~~~');
    } else {
      console.log(err);
    }
  }
);